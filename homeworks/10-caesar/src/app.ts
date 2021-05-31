import { program } from 'commander'
import fs from 'fs'
import { CaesarTransform } from './caesar/CaesarTransform'
import chalk from 'chalk'

program.version('0.0.1')

program
  .requiredOption('-s, --shift <number>', 'Set the shift for decode/encode data            [number] [required]')
  .requiredOption('-a, --action <"encode" or "decode">', 'Specify what action you want to perform         [required] [choices: "encode", "decode"]')
  .option('-i, --input <path>', 'Specify the file where to get the data from     [string]', 'STDIN')
  .option('-o, --output <path>', 'Specify the file to save the data to            [string]', 'STDOUT')

program.parse(process.argv)
const options = program.opts()

console.log(chalk.cyan('shift: ') + chalk.green(options.shift))
console.log(chalk.cyan('action: ') + chalk.green(options.action))
console.log(chalk.cyan('input: ') + chalk.green(options.input))
console.log(chalk.cyan('output: ') + chalk.green(options.output))

const readStream = options.input === 'STDIN' ? process.stdin : fs.createReadStream(options.input)
const writeStream = options.output === 'STDOUT' ? process.stdout : fs.createWriteStream(options.output)

const caesarTransform = new CaesarTransform(+options.shift, options.action)

readStream.pipe(caesarTransform).pipe(writeStream)
