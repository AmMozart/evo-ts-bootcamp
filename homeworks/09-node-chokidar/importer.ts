import { DirWatcher } from "./dirwatcher"
import csvtojson from 'csvtojson'
import fs from 'fs'

export class Importer {
  constructor(private dirWatcher: DirWatcher, private path: string) { }

  public listen(callback: any) {
    this.dirWatcher.eventEmitter.on('changed', file => {
      this.import(this.path + '/' + file)
        .then(data => callback(data))
    })
  }

  public async import(path: string) {
    return await csvtojson().fromFile(path)
  }

  public importSync(path: string) {
    return fs.readFileSync(path)
  }
}



