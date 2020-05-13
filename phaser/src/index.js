import 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';

class Game extends Phaser.Game {
    constructor() {
        super(config);

        this.scene.add('BootScene', BootScene);
        this.scene.add('PreloaderScene', PreloaderScene);
        // this.scene.add('OptionsScene', OptionsScene);
        this.scene.add('GameScene', GameScene);

        this.scene.start('BootScene');
    }
}

window.game = new Game();