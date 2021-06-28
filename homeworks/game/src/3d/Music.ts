import * as BABYLON from 'babylonjs'
import { URL_MUSIC } from './config/config';

export class Music {

  private sound

  constructor(private scene: BABYLON.Scene) {
    this.sound = new BABYLON.Sound("music", URL_MUSIC, this.scene, null, { autoplay: false, volume: 0.5, loop: true });
  }

  public playMusic() {
    this.sound.play()
  }

  public stopMusic() {
    this.sound.stop()
  }
}

