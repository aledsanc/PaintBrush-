class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        
    }
    checkFloor() {
        //TODO
    }
    evaluateFloorUnder(){
        //TODO
    }

    update() {
        //TODO
    }

    reset() {
        //TODO
    }
}