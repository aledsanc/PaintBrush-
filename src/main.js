let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [Menu, Play, GameOver, Help],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0
            }
        }
    }
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keySPACE, keyR, keyJump, keyH;
