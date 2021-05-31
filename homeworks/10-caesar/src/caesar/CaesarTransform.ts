import { Transform } from 'stream'
import { caesarEncode } from './caesarEncode'
import { caesarDecode } from './caesarDecode'

export class CaesarTransform extends Transform {
  constructor(private shift: number = 3, private type: string = 'encode') {
    super()
  }

  _transform(chunk: any, encoding: string, callback: any) {
    try {
      let resultString = null
      switch (this.type) {
        case 'encode':
          resultString = caesarEncode(chunk.toString('utf8'), this.shift)
          break
        case 'decode':
          resultString = caesarDecode(chunk.toString('utf8'), this.shift)
      }

      callback(null, resultString);
    } catch (err) {
      callback(err);
    }
  }
}
