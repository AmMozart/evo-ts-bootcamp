import crypto from 'crypto'
import fs from 'fs'

export function getChecksum(path: string) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('md5')
    const input = fs.createReadStream(path)

    input.on('error', reject)

    input.on('data', function (chunk: any) {
      hash.update(chunk)
    })

    input.on('close', function () {
      resolve(hash.digest('hex'))
    })
  })
}
