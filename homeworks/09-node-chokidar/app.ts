import { Importer } from "./importer"
import { DirWatcher } from "./dirwatcher"

const PATH = './data'

const dirWatcher = new DirWatcher()
const importer = new Importer(dirWatcher, PATH)

dirWatcher.watch(PATH, 1000).catch(console.error)
importer.listen((data: any) => {
  console.log(data)
})
