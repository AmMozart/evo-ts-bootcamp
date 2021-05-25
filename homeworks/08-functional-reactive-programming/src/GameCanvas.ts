import { Point, points } from "./Point"

export class GameCanvas {
  public score = 0
  public context: CanvasRenderingContext2D
  private target = new Image()
  private brick = new Image()
  private homeWindow = new Image()
  private cat = new Image()
  public catIndex = 0
  public targetPoint: Point = { x: -25, y: -25 }

  public points: Point[] = points

  constructor(public canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d')!
    this.target.src = './public/target.svg'
    this.brick.src = './public/brick.svg'
    this.homeWindow.src = './public/homeWindow.svg'
    this.cat.src = './public/cat.svg'
  }

  public render(): void {
    if (this.context) {
      this.context.clearRect(0, 0, 500, 500)
      this.drawBrickWall()
      this.drawWindowsAndCat(this.points, this.context)
      this.drawTarget(this.targetPoint)
    }
  }

  public drawTarget(point: { x: number, y: number }): void {
    this.context.drawImage(this.target, point.x, point.y, 50, 50);
  }

  public drawWindowsAndCat(points: Point[], context: CanvasRenderingContext2D): void {
    this.points.forEach((point, i) => {
      if (i === this.catIndex) {
        context.drawImage(this.cat, point.x, point.y, 55, 55);
      }
      else
        context.drawImage(this.homeWindow, point.x, point.y, 55, 55);
    })
  }

  public drawBrickWall(): void {
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 12; j++) {
        const dx = i * 50
        const dy = j * 50
        this.context.drawImage(this.brick, dx, dy, 50, 50);
      }
    }
  }

  public isHitTarget(x: number, y: number): boolean {
    const { x: catX, y: catY } = this.points[this.catIndex]
    return (
      x >= catX && x <= catX + 60
      &&
      y >= catY && y <= catY + 60
    )
  }
}
