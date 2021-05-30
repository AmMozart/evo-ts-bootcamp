import fs from 'fs'
import { getChecksum } from './utils/checksum'
import { EventEmitter } from 'events'
import chalk from 'chalk'

export class DirWatcher {
  public eventEmitter
  private allChecksums: any = {}

  constructor() {
    this.eventEmitter = new EventEmitter()
  }

  public async watch(path: string, delay: number) {

    const callback = async () => {
      const files = await fs.promises.readdir(path)

      for (const file of files) {
        const checksum = await getChecksum(path + '/' + file)

        if (Object.keys(this.allChecksums).includes(file)) {
          if (checksum !== this.allChecksums[file]) {
            this.allChecksums[file] = checksum
            emitChangeEvent(file)
          }
        }
        else {
          this.allChecksums = { ...this.allChecksums, [file]: checksum }
          emitAddEvent(file)
        }

        for (const key in this.allChecksums) {
          if (!files.includes(key)) {
            delete this.allChecksums[key]
            emitDeleteEvent(key)
          }
        }
      }
    }

    setInterval(callback, delay)

    const emitChangeEvent = (file: string) => {
      this.eventEmitter.emit('changed', file)
      console.log(chalk.yellow('Changed file: '), chalk.green(file))
    }

    const emitDeleteEvent = (file: string) => {
      this.eventEmitter.emit('deleted', file)
      console.log(chalk.red('Deleted file: '), chalk.red(file))
    }

    const emitAddEvent = (file: string) => {
      this.eventEmitter.emit('changed', file)
      console.log(chalk.blue('Added file: '), chalk.blue(file))
    }
  }
}