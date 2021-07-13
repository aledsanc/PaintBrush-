class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
/*
    preload() {
        this.load.image('falling', './assets/Falling.png'); //unused asset
        this.load.image('menu', './assets/MenuScreen.png');
        this.load.image('jump', './assets/Jump.png'); //unused asset
        this.load.image('spike', './assets/Spike.png'); //unused asset
        this.load.image('bg', './assets/bg.png');
        this.load.image('plat', './assets/plat.png');
        this.load.spritesheet('running', './assets/Running.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 7});
    }

    create() {
        this.starfield = this.add.tileSprite(0, 0, 16, 16, 'bg').setOrigin(0,0);

        // green UI background is a leftover from rocket patrol
        this.add.rectangle(0, borderUISize + borderPadding, 
            game.config.width, 
            borderUISize * 2, 0x00FF00).setOrigin(0,0);
    
        this.pl1 = new Player(this, game.config.width / 2, game.config.height / 2, 'running', 0).setOrigin(0, 0);
        const playerAnimation = this.anims.create({
            key: 'running1',
            frames: this.anims.generateFrameNumbers('running'),
            frameRate: 12
        });
        this.pl1.play({ key: 'running1', repeat: -1 });

        this.plats = new Array(21); 
        for (let i = 0; i < 21; i++){
            this.plats[i] = new Plat(this, 32 * i, 392, 'plat', 0).setOrigin(0, 0);
        }

        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyJump = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


        this.p1Score = 0;

        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5, bottom: 5
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);

        this.gameOver = false; //This is a relic from rocket patrol

        
    }

    update() {
        if(true) {
            this.pl1.update();
            for(let i = 0; i < 21; i++){
                this.plats[i].update();
                if(this.plats[i].x == this.pl1.x){
                    this.pl1.evaluateFloor(0, this.plats[i].y);
                    this.p1Score++; //Increases the player's score per platform
                    this.scoreLeft.text = this.p1Score;
                }
                if(this.plats[i].x == this.pl1.x + 16){
                    this.pl1.evaluateFloor(1, this.plats[i].y);
                }
            }
        }
        if(this.pl1.y > game.config.height){
            this.scene.start("gameOverScene"); //Game over when the player falls offscreen
        }
    }
}*/

    preload() {
        //load our images or sounds 
        this.load.image("mc", "assets/TempMC.png");
        this.load.image("plat", "assets/TempPlatform.png"); 
    }
    create() {
        this.mc = new Player(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'mc').setOrigin(0.5, 0);
        this.mc.setBounce(0.2);
        this.mc.setCollideWorldBounds(true);

        this.plat = new Plat(this, 32 * i, 392, 'plat', 0).setOrigin(0, 0);
    }
    update () {
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);
        } 
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);    
        }
        else
        {
            player.setVelocityX(0);    
        }
        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }
    }
}