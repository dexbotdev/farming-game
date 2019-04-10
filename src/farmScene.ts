import { Camera } from './camera';
import { Farm } from './farm';
import { Farmer } from './farmer';

export class FarmScene extends Phaser.Scene {
  camera: Camera;
  farm: Farm;
  farmer: Farmer;

  constructor() {
    super('FarmScene');
  }
  
  create(): void {
    this.farm = new Farm(this);
    this.camera = new Camera(this, 0, 0);
    this.farmer = new Farmer(this, 0, 0, this.farm);
  }

  update(): void {
    this.camera.update();
    this.farmer.update();
  }
}