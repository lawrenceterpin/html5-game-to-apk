import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'PreloaderScene'
    })
  }

  preload() {

    var gameWidthMiddle = this.game.config.width / 2;

    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, gameWidthMiddle, 50);

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Chargement...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    var progressBarWidth = gameWidthMiddle - 20

    this.load.on('progress', function (value) {
      //console.log(value);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, progressBarWidth * value, 30);

      percentText.setText(parseInt(value * 100) + '%');
    });

    this.load.on('fileprogress', function (file) {
      //console.log(file.src);

      assetText.setText('Chargement des éléments: ' + file.key);
    });

    this.load.on('complete', function () {
      console.log('complete');

      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });


    // map made with Tiled in JSON format
    this.load.tilemapTiledJSON('map', './assets/map.json');

    // tiles in spritesheet 
    this.load.image('sol', './assets/sol.png');
    this.load.image('herbe', './assets/herbe.png');
    // player animations
    this.load.atlas('player', './assets/player/player.png', './assets/player/player.json');

  }

  create() {

    this.scene.start('GameScene')
  }
};