import Phaser from 'phaser';
import '/style.css';

const sizes = {
    width: 500,
    height: 500
}

const config = {
    type: Phaser.WEBGL,
    width: sizes.width,
    height: sizes.height,
    canvas: gameCanvas,
    // scene: {
    //   preload: preload,
    //   create: create,
    //   update: update
    // }
};
const game = new Phaser.Game(config);
  
function preload() {
// Load assets here
}

function create() {
// Initialize game objects here
}

function update() {
// Handle game logic here
}
  