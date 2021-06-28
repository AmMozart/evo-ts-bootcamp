import * as BABYLON from 'babylonjs'
import eventBus from '../utils/pubSub'
import { BusEvent } from '../busTypes/eventTypes';

export class Camera {
  private camera

  constructor(private canvas: HTMLCanvasElement, private scene: BABYLON.Scene) {

    this.camera = new BABYLON.ArcRotateCamera("myCamera", 0, 0, 0, new BABYLON.Vector3(0, 30, -40), this.scene);
    this.camera.attachControl(this.canvas, true);
    this.camera.setTarget(BABYLON.Vector3.Zero());

    this.camera.checkCollisions = true
    this.camera.collisionRadius = new BABYLON.Vector3(15, 15, 15);
    // this.camera.lowerRadiusLimit = 40;
    // this.camera.upperRadiusLimit = 100;

    this.setViewToBall = this.setViewToBall.bind(this)
    eventBus.subscribe(BusEvent.CHANGE_SELECTED_BALL, this.setViewToBall)
  }

  private setViewToBall(ballName: string) {
    // console.log(this.scene.getMeshByName('Cue')?.getAbsolutePosition())

    const selectedBall = this.scene.getMeshByName(ballName)
    if (selectedBall) {
      this.camera.setTarget(selectedBall)
      // console.log(this.camera.position)
      // this.camera.setPosition(
      //   new BABYLON.Vector3(selectedBall.getAbsolutePosition().x + 10,
      //     15,
      //     selectedBall.getAbsolutePosition().z)
      // )
    }
  }

}

