import {
  ColliderDesc,
  RigidBody,
  RigidBodyDesc,
  World,
} from "@dimforge/rapier3d-compat";
import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  Scene,
} from "three";

export default class Box {
  dynamicBody: [Object3D, RigidBody];

  constructor(scene: Scene, world: World, position: [number, number, number]) {
    const boxMesh = new Mesh(new BoxGeometry(), new MeshStandardMaterial());
    boxMesh.castShadow = true;
    scene.add(boxMesh);

    const boxBody = world.createRigidBody(
      RigidBodyDesc.dynamic().setTranslation(...position)
    );

    const boxShape = ColliderDesc.cuboid(0.5, 0.5, 0.5)
      .setRestitution(0.5)
      .setMass(0.1);
    world.createCollider(boxShape, boxBody);

    this.dynamicBody = [boxMesh, boxBody];
  }

  update() {
    this.dynamicBody[0].position.copy(this.dynamicBody[1].translation());
    this.dynamicBody[0].quaternion.copy(this.dynamicBody[1].rotation());
  }
}
