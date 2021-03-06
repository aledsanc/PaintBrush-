class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
/*
    preload() {
        this.load.image('falling', './assets/Falling.png'); 
        this.load.image('menu', './assets/MenuScreen.png');
        this.load.image('jump', './assets/Jump.png'); 
        this.load.image('spike', './assets/Spike.png'); 
        this.load.image('bg', './assets/bg.png');
        this.load.image('plat', './assets/plat.png');
        this.load.image('item', './assets/TempColor.png');
        this.load.spritesheet('running', './assets/Running.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 7});
    }

    create() {
        this.starfield = this.add.tileSprite(0, 0, 16, 16, 'bg').setOrigin(0,0);

        this.add.rectangle(0, borderUISize + borderPadding, 
            game.config.width, 
            borderUISize * 2, 0x00FF00).setOrigin(0,0);
<<<<<<< HEAD
        
        
=======
    
>>>>>>> 8db7ed2027720a09f9a28c42595ee844e3d3caa6
        this.pl1 = new Player(this, game.config.width / 2, game.config.height / 2, 'running', 0).setOrigin(0, 0);
        const playerAnimation = this.anims.create({
            key: 'running1',
            frames: this.anims.generateFrameNumbers('running'),
            frameRate: 12
        });
        this.pl1.play({ key: 'running1', repeat: -1 });

<<<<<<< HEAD
       
=======
>>>>>>> 8db7ed2027720a09f9a28c42595ee844e3d3caa6
        this.plats = new Array(21); 
        for (let i = 0; i < 21; i++){
            this.plats[i] = new Plat(this, 32 * i, 392, 'plat', 0).setOrigin(0, 0);
        }
        this.item = new Thing(this, 32, 392, 'item', 0).setOrigin(0, 0);
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

        this.gameOver = false; 

        
    }

    update() {
<<<<<<< HEAD

        
=======
>>>>>>> 8db7ed2027720a09f9a28c42595ee844e3d3caa6
        if(true) {
            this.pl1.update();
            for(let i = 0; i < 21; i++){
                this.plats[i].update();
                if(this.plats[i].x == this.pl1.x){
                    this.pl1.evaluateFloor(0, this.plats[i].y);
                    this.p1Score++; 
                    this.scoreLeft.text = this.p1Score;
                }
                if(this.plats[i].x == this.pl1.x + 16){
                    this.pl1.evaluateFloor(1, this.plats[i].y);
                }
            }
        }
        if(this.pl1.y > game.config.height){
            this.scene.start("gameOverScene");
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

        this.plat = new Plat(this, 32, 392, 'plat', 0).setOrigin(0, 0);
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    update () {
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-160);
        } 
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(160);    
        }
        else
        {
            this.player.setVelocityX(1);    
        }
        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }
    }
}