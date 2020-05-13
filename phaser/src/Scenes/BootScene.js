import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {

    console.log('boot');
  }

  create() {
    this.scene.start('PreloaderScene');
  }
};