import * as BABYLON from 'babylonjs'
import CANNON from 'cannon'
import { Music } from './Music';
import { Cue } from './Cue';
import { Ball } from './Ball';
import { Camera } from './Camera';

export class Game {
  private scene: BABYLON.Scene;
  private camera: Camera;
  private music: Music;
  private light: BABYLON.HemisphericLight;
  private ground: BABYLON.Mesh;
  // private ball?: BABYLON.Mesh;
  private balls: Ball[] = []
  // private animation: BABYLON.AnimationGroup | undefined;

  public constructor(canvas: HTMLCanvasElement) {
    const engine = new BABYLON.Engine(canvas);
    this.scene = new BABYLON.Scene(engine);
    this.scene.debugLayer.show();

    this.camera = new Camera(canvas, this.scene)

    this.light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 100, 0), this.scene);
    this.light.intensity = 1;

    this.ground = BABYLON.MeshBuilder.CreateBox("ground", { width: 200, height: 0.01, depth: 200 }, this.scene);

    const groundMaterial = new BABYLON.StandardMaterial("grooundMat", this.scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("./textures/floor3.jpg", this.scene);
    this.ground.material = groundMaterial;

    this.music = new Music(this.scene);
    this.loadMesh()

    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 200 }, this.scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", this.scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox/skybox2", this.scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;

    // this.scene.actionManager = new BABYLON.ActionManager(this.scene)
    // this.scene.actionManager.registerAction(
    //   new BABYLON.ExecuteCodeAction(
    //     {
    //       trigger: BABYLON.ActionManager.OnKeyDownTrigger,
    //       parameter: ' '
    //     },
    //     () => {
    //       if (this.balls) {
    //         this.balls.find(ball => ball.isSelected)?.hit()
    //       }
    //     }
    //   )
    // );

    this.scene.createDefaultEnvironment();

    engine.runRenderLoop(() => {
      this.scene.render();
    });
    window.addEventListener("resize", function () {
      engine.resize();
    });
  }

  private loadMesh() {

    this.scene.enablePhysics(new BABYLON.Vector3(0, -9.8, 0), new BABYLON.CannonJSPlugin(true, 20, CANNON));
    this.ground.physicsImpostor = new BABYLON.PhysicsImpostor(this.ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.5, restitution: 0.7 }, this.scene);

    BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "billiard.babylon", this.scene)
      .then((result: any) => {

        result.meshes.forEach((mesh: BABYLON.AbstractMesh) => {
          if (mesh.name.indexOf("Group040") !== -1) {
            mesh.position.y += 35.5
            mesh.scaling.scaleInPlace(15);
          }
          else {
            if (mesh.name.indexOf("Sphere198") !== -1) {

              const sphereCollider = BABYLON.Mesh.CreateSphere("", 16, 1.22, this.scene);
              sphereCollider.isVisible = false;
              sphereCollider.checkCollisions = true;

              const physicsRoot = new BABYLON.Mesh('', this.scene)
              physicsRoot.addChild(mesh);
              physicsRoot.addChild(sphereCollider);

              const position = mesh.getAbsolutePosition()
              sphereCollider.position.copyFrom(position)

              sphereCollider.physicsImpostor = new BABYLON.PhysicsImpostor(sphereCollider, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 0 }, this.scene);
              physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0.285, restitution: 0.4 }, this.scene);

              physicsRoot.physicsImpostor.physicsBody.linearDamping = 0.4;
            }
          }
        })
      })

    // else if (mesh.name.indexOf("Box027") !== -1) {//|| mesh.name.indexOf("Line078") !== -1
    //   // physicsRoot.position = new BABYLON.Vector3(0, 0, 0);
    //   mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 0, friction: 0.4, restitution: 0 }, this.scene);
    //   physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, friction: 0.4, restitution: 0 }, this.scene);
    // }
    // else if (mesh.name.indexOf("Line078") !== -1) {//|| mesh.name.indexOf("Line078") !== -1
    //   // physicsRoot.position = new BABYLON.Vector3(0, 0, 0);
    //   mesh.position.y -= 23.5
    //   mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 0, friction: 0.4, restitution: 0 }, this.scene);
    //   physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, friction: 0.4, restitution: 0 }, this.scene);
    // }
    // else if (mesh.name.indexOf("Cue") !== -1) {
    //   // mesh.position.y += 0.5
    //   mesh.position.x += 50
    //   mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 0, friction: 0, restitution: 0 }, this.scene);
    //   physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, friction: 0, restitution: 1 }, this.scene);
    // }
    // else if (mesh.name.indexOf("Group036") !== -1 || mesh.name.indexOf("Group037") !== -1) {
    //   // physicsRoot.position = new BABYLON.Vector3(0, 0, 0);
    //   // mesh.position.y -= 0.5
    //   // mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, friction: 0, restitution: 0 }, this.scene);
    //   physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, friction: 0, restitution: 0 }, this.scene);
    // }

    // else {
    //   // physicsRoot.position = new BABYLON.Vector3(0, 0, 0);
    //   // mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, friction: 0, restitution: 0 }, this.scene);
    //   physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, friction: 0, restitution: 0 }, this.scene);
    // }



    // });

    // BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "billiard.babylon", this.scene)
    //   .then((result: any) => {


    //     result.meshes.forEach((mesh: any) => {
    //       // this.shadowGenerator00.getShadowMap()!.renderList!.push(mesh);
    //     });

    //     result.meshes.forEach((mesh: BABYLON.Mesh) => {

    //       if (mesh.name.indexOf("Group040") !== -1) {
    //         mesh.position.y += 35.5 //34
    //         mesh.scaling.scaleInPlace(15);
    //         // mesh.receiveShadows = true

    //       }
    //       else {
    //         // mesh.receiveShadows = true
    //         mesh.checkCollisions = true;
    //         const physicsRoot = new BABYLON.Mesh("", this.scene);
    //         physicsRoot.addChild(mesh);

    //         // this.shadowGenerator00!.getShadowMap()!.renderList!.push(mesh);

    //         if (mesh.name.indexOf("Sphere") !== -1) {
    //           this.balls.push(new Ball(mesh, this.scene))
    //         }

    //         else if (mesh.name.indexOf("Box027") !== -1) {//|| mesh.name.indexOf("Line078") !== -1
    //           // physicsRoot.position = new BABYLON.Vector3(0, 0, 0);
    //           mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 0, friction: 0.4, restitution: 0 }, this.scene);
    //           physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, friction: 0.4, restitution: 0 }, this.scene);
    //         }
    //         else if (mesh.name.indexOf("Line078") !== -1) {//|| mesh.name.indexOf("Line078") !== -1
    //           // physicsRoot.position = new BABYLON.Vector3(0, 0, 0);
    //           mesh.position.y -= 23.5
    //           mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 0, friction: 0.4, restitution: 0 }, this.scene);
    //           physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, friction: 0.4, restitution: 0 }, this.scene);
    //         }
    //         else if (mesh.name.indexOf("Cue") !== -1) {
    //           // mesh.position.y += 0.5
    //           mesh.position.x += 50
    //           mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 0, friction: 0, restitution: 0 }, this.scene);
    //           physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, friction: 0, restitution: 1 }, this.scene);
    //         }
    //         else if (mesh.name.indexOf("Group036") !== -1 || mesh.name.indexOf("Group037") !== -1) {
    //           // physicsRoot.position = new BABYLON.Vector3(0, 0, 0);
    //           // mesh.position.y -= 0.5
    //           // mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, friction: 0, restitution: 0 }, this.scene);
    //           physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, friction: 0, restitution: 0 }, this.scene);
    //         }

    //         else {
    //           // physicsRoot.position = new BABYLON.Vector3(0, 0, 0);
    //           // mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, friction: 0, restitution: 0 }, this.scene);
    //           physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, friction: 0, restitution: 0 }, this.scene);
    //         }

    //       }
    //     })
    //   });
  }



  // const moveAnimation = new BABYLON.Animation(
  //   "boxMove",
  //   "position",
  //   60,
  //   BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
  //   BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
  // );
  // const moveFrames = [];
  // moveFrames.push({
  //   frame: 0,
  //   value: new BABYLON.Vector3(-22, 9.5, 0)
  // });
  // moveFrames.push({
  //   frame: 60,
  //   value: new BABYLON.Vector3(-22, 9.5, 0)
  // });
  // moveFrames.push({
  //   frame: 120,
  //   value: new BABYLON.Vector3(-18, 9.5, 0)
  // });
  // moveFrames.push({
  //   frame: 150,
  //   value: new BABYLON.Vector3(-22, 9.5, 0)
  // });

  // moveAnimation.setKeys(moveFrames);


  // const animation = new BABYLON.AnimationGroup("qweqwe", this.scene);
  // animation.addTargetedAnimation(moveAnimation, sphere);
  // animation.play(true);

}
