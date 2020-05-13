import 'phaser';
import VirtualJoystickPlugin from 'phaser3-rex-plugins/plugins/virtualjoystick-plugin.js';

const ratio = Math.max(window.innerWidth / window.innerHeight, window.innerHeight / window.innerWidth)
const DEFAULT_HEIGHT = 880 // any height you want
const DEFAULT_WIDTH = ratio * DEFAULT_HEIGHT

export default {
  type: Phaser.AUTO,
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
  // resolution: window.devicePixelRatio || 1,
  scale: {
    mode: Phaser.Scale.RESIZE,// RESIZE for mobile
    // autoCenter: Phaser.Scale.CENTER_BOTH,
    // orientation: Phaser.Scale.Orientation.LANDSCAPE,
    // autoRound: true,
    // width: '100%',
    // height: '100%'
  },
  // roundPixels: true,
  zoom: 15,
  // pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1300 },
      debug: false
    }
  },
  callbacks: {
    postBoot: function (game) {
      // In v3.15, you have to override Phaser's default styles
      game.canvas.style.width = '100%';
      game.canvas.style.height = '100%';
    }
  },
  plugins: {
    global: [{
      key: 'rexVirtualJoystick',
      plugin: VirtualJoystickPlugin,
      start: true
    },
    ]
  }
};