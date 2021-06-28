import * as BABYLON from 'babylonjs'
import { BusEvent } from '../busTypes/eventTypes'
import eventBus from '../utils/pubSub'
import { URL_PICK_BALL_SOUND } from './config/config'

export class Ball {
  public name: string
  public isSelected = false
  private sphereCollider: BABYLON.Mesh
  private physicsRoot: BABYLON.Mesh

  constructor(private mesh: BABYLON.AbstractMesh, scene: BABYLON.Scene) {
    this.name = mesh.name
    // this.mesh.checkCollisions = false;
    // this.mesh.isVisible = true

    this.sphereCollider = BABYLON.Mesh.CreateSphere("sphereCollider", 16, 1.5, scene);
    this.sphereCollider.isVisible = true;
    // this.sphereCollider.checkCollisions = true;

    this.physicsRoot = new BABYLON.Mesh('', scene)
    this.physicsRoot.addChild(this.mesh);
    this.physicsRoot.addChild(this.sphereCollider);
    // this.physicsRoot.position.y += 20
    // this.physicsRoot.position.copyFrom(this.mesh.getAbsolutePosition())
    this.sphereCollider.position.copyFrom(this.mesh.getAbsolutePosition())

    this.sphereCollider.physicsImpostor = new BABYLON.PhysicsImpostor(this.sphereCollider, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 0 }, scene);
    this.physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(this.physicsRoot, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0.285, restitution: 0.4 }, scene);

    // this.sphereCollider.physicsImpostor.physicsBody.linearDamping = 0.25;
    this.physicsRoot.physicsImpostor.physicsBody.linearDamping = 0.25;

    this.sphereCollider.actionManager = new BABYLON.ActionManager(scene);
    this.sphereCollider.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnLeftPickTrigger, () => {
      eventBus.publish(BusEvent.CHANGE_SELECTED_BALL, this.name)
    }));

    eventBus.subscribe(BusEvent.CHANGE_SELECTED_BALL, (ballName) => this.isSelected = this.name === ballName)

    this.sphereCollider.actionManager.registerAction(new BABYLON.PlaySoundAction(BABYLON.ActionManager.OnLeftPickTrigger,
      new BABYLON.Sound("bonus", URL_PICK_BALL_SOUND, scene, null, { autoplay: true, loop: false })
    ))
  }

  public hit() {
    this.physicsRoot.applyImpulse(new BABYLON.Vector3(20, 0, 0), this.physicsRoot.getAbsolutePosition());
  }
}
