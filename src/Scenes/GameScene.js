import 'phaser';

import Player from '../components/player/player'

var player;

/* VARIABLES GLOBALES */
const datas = {
  /* COULEURS */
  colors: {
    color_white: '#ffffff',
    color_black: '#000000',
    color_gray: '#333333',
    color_blue: '#00a8ff'
  },
  /* POLICES */
  polices: {
    normal: 18
  },
  cursorKeys: {}
};


var tilesets = [];
var dynamicLayers = [];

var text, textStatus;
var Q, D, Z, E, R;

var deviceOs;

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'GameScene'
    });
  }

  preload() {
  }

  create() {
    // Chargement de la this.map
    this.map = this.make.tilemap({ key: 'map' });

    // Création de jeu de tuiles
    tilesets['sol'] = this.map.addTilesetImage("sol", "sol");
    tilesets['herbe'] = this.map.addTilesetImage("herbe", "herbe");

    dynamicLayers['herbe'] = this.map.createDynamicLayer("herbe", tilesets['herbe']);
    dynamicLayers['sol'] = this.map.createDynamicLayer("sol", tilesets['sol']);

    // // Exclusion de collisions pour l'index [-1]
    dynamicLayers['sol'].setCollisionByExclusion([-1]);


    // Création du joueur
    player = new Player({
      scene: this,
      x: 65,
      y: dynamicLayers['sol'].height - 200,
      atlas: 'player',
    });


    // // Les limites du monde
    this.physics.world.bounds.width = dynamicLayers['sol'].width;
    this.physics.world.bounds.height = dynamicLayers['sol'].height;

    // Caméra de suivi du joueur
    // set bounds so the camera won't go outside the game world
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    // make the camera follow the player
    this.cameras.main.startFollow(player, false);
    // set background color, so the sky is not black
    this.cameras.main.setBackgroundColor('#A1F2EC');
    // Correction des pixels au déplacement de la caméra
    this.cameras.main.roundPixels = true;

    // Collisions d'objets
    this.objCollider();

    // this.textInterface();

    this.controls();
  }

  /**
   * Controles du jeu et attribution des touches
   */
  controls() {

    deviceOs = this.sys.game.device.os;

    if (deviceOs.desktop) {
      console.log("desktop")

      Q = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
      D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      Z = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
      E = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
      R = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

      datas.cursorKeys['left'] = Q;
      datas.cursorKeys['right'] = D;
      datas.cursorKeys['up'] = Z;
      datas.cursorKeys['interaction'] = E;
      datas.cursorKeys['sortir'] = R;
    }
    else {
      console.log("mobile");

      // Création du joystick virtuel
      this.joyStick = this.plugins.get('rexVirtualJoystick').add(this, {
        x: 70,
        y: this.cameras.main.height - 70,
        radius: 100,
        base: this.add.circle(0, 0, 50, 0x888888),
        thumb: this.add.circle(0, 0, 30, 0xcccccc),
        // dir: '8dir',   // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
        // forceMin: 16,
        // enable: true
      });
      //.on('update', this.dumpJoyStickState, this);
      this.joyStick.setScrollFactor(0);

      datas.cursorKeys = this.joyStick.createCursorKeys();

      datas.cursorKeys['interaction'] = datas.cursorKeys['up'];
      datas.cursorKeys['sortir'] = datas.cursorKeys['right'];
    }
  }

  /**
   * Collision d'objets
   */
  objCollider() {

    this.physics.add.collider(dynamicLayers['sol'], player);
  }

  /**
   * Textes de l'interface
   */
  textInterface() {

    var style = {
      font: datas.polices.normal + "px Arial Black",
      fill: datas.colors.color_white,
      align: "center",
    };

    // Texte du compteur d'énérgie de fusée
    text = this.add.text(150, this.cameras.main.height - 40, 'Energie fusée: 0/' + datas.fusee.energieFuseeTotal, style);
    text.setStroke(datas.colors.color_blue, 16);
    text.setShadow(2, 2, datas.colors.color_gray, 2, true, true);

    text.setScrollFactor(0);
  }

  /**
   * Boutons de l'interface
   */
  buttonInterface() {
  }

  /**
   * Collectie d'énergie de fusée
   * 
   * @param  {object} sprite
   * @param  {object} tile
   */
  collectEnergieFusee(sprite, tile) {

  }


  /**
   * Création de layer
   * 
   * @param  {object} map
   * @param  {object} layerToCreate
   */
  createDynamicLayer(map, layerToCreate) {

    Object.keys(layerToCreate).map(function (objectKey, index) {

      var value = layerToCreate[objectKey];
      var layerID = value['layerID'];
      var tileset = value['tileset'];
      var x = value['x'];
      var y = value['y'];

      dynamicLayers[layerID] = map.createDynamicLayer(layerID, tileset, x, y);
    });
  }


  /**
   * Mis à jour du jeu
   * 
   * @param  {} time
   * @param  {} delta
   */
  update(time, delta) {

    // Mise à jour des controles du joueur
    player.update(datas.cursorKeys);
  }
};