import { interval, fromEvent } from "rxjs"
import { map, startWith, tap } from 'rxjs/operators'
import { GameCanvas } from './GameCanvas'
import { getRandomNumber } from "./utils/utils"
import '../public/style.css'

const score = document.getElementById('score')
const can: HTMLCanvasElement | null = document.getElementById('canvas') as HTMLCanvasElement

const gameCanvas = new GameCanvas(can)
setTimeout(() => {

}, 1000)

const move$ = fromEvent<MouseEvent>(can, 'mousemove').pipe(
  tap((event) => {
    gameCanvas.targetPoint = {
      x: event.clientX - 25,
      y: event.clientY - 25
    }
    gameCanvas.render()
  })
)

move$.subscribe()

const shoot$ = fromEvent<MouseEvent>(gameCanvas.canvas, 'click').pipe(
  map(event => ({
    x: event.clientX,
    y: event.clientY
  })),
  tap(({ x, y }) => {
    if (gameCanvas.isHitTarget(x, y)) {
      if (score)
        score.textContent = String(++gameCanvas.score)
    }
  })
)

shoot$.subscribe()

const game$ = interval(1000)
  .pipe(
    startWith(0),
    tap(() => {
      gameCanvas.catIndex = getRandomNumber(gameCanvas.points.length - 1)
    }),
    tap(() => { gameCanvas.render() })
  )

game$.subscribe()
