class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.terminalV = -24;
        this.vSpeed = 0;
        this.floorUnderHeight = 360;
        
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