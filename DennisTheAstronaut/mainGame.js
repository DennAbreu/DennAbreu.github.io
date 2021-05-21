var platforms;
var deathPlat;
var player;
var cursors;
var helpMenu;
var restartMenu;
var helpText;
var restartText;

var energyOrb;
var asteroid;
var astCreate;

var varX = 300;
var varY = 350;

var score = 0;
var scoreText;
var lives = 3;
var livesText;
var gameOver = false;

var rand;
var ranX;
var ranY;

var nKey;
var hKey;
var yKey;


var orbSound;
var collSound;
var fallSound;


class mainGame extends Phaser.Scene {


    constructor() {
        super('mainGame');
    } //end constructor

    preload() {

        //load images
        this.load.image('space', 'assets/images/spaceBg.jpg');
        this.load.image('shortPlat', 'assets/shortPlat.png');
        this.load.image('startPlat', 'assets/startPlat.png');
        this.load.image('energyOrb', 'assets/images/energyOrb.png');
        this.load.image('asteroid', 'assets/images/ast.png');
        this.load.spritesheet('astro', 'assets/images/spritesheet.png', {
            frameWidth: 50,
            frameHeight: 61
        });
        this.load.image('restart', 'assets/images/restartMenu.png');
        this.load.image('help', 'assets/images/helpMenu.png');

        //load sounds   

        this.load.audio('bloop', 'assets/sounds/eOrb.mp3');
        this.load.audio('crash', 'assets/sounds/aCollision.mp3');
        this.load.audio('woo', 'assets/sounds/woo.mp3')


    } //end preLoad


    create() {


        this.cursors = this.input.keyboard.createCursorKeys();
        this.nKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
        this.hKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        this.yKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);


        this.add.image(400, 400, 'space');

        helpMenu = this.add.image(400, 400, 'help');
        helpMenu.visible = false;

        restartMenu = this.add.image(400, 400, 'restart');
        restartMenu.visible = false;


        orbSound = this.sound.add("bloop", {
            loop: false
        });

        collSound = this.sound.add("crash", {
            loop: false
        });

        fallSound = this.sound.add("woo", {
            loop: false
        });

        helpText = this.add.text(0, 750, 'Hold "H" For Help', {
            fontSize: '15px',
            fill: '#fff'
        });

        restartText = this.add.text(0, 770, 'Hold "N" To Restart', {
            fontSize: '15px',
            fill: '#fff'
        });

        scoreText = this.add.text(0, 0, 'Score: 0', {
            fontSize: '28px',
            fill: '#fff'
        });

        livesText = this.add.text(1, 25, 'Lives: 3', {
            fontSize: '28px',
            fill: '#fff'
        });



        this.platforms = this.physics.add.staticGroup();
        this.deathPlat = this.physics.add.staticGroup();


        //top left platform
        this.platforms.create(100, 300, 'shortPlat');
        //top right platform
        this.platforms.create(750, 300, 'shortPlat');
        //top platform
        this.platforms.create(400, 120, 'shortPlat');
        //bottom left platform
        this.platforms.create(150, 600, 'shortPlat');
        //middle platform
        this.platforms.create(400, 400, 'shortPlat');
        //bottom right platform
        this.platforms.create(650, 550, 'shortPlat');
        //starting Point
        this.platforms.create(400, 750, 'startPlat');

        this.deathPlat.create(400, 858, 'shortPlat').setScale(4).refreshBody();


        //Player Controller


        this.player = this.physics.add.sprite(400, 620, 'astro');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, this.platforms);
        // this.physics.add.collider(this.player, this.deathPlat);
        this.physics.add.collider(this.player, this.deathPlat, fallToDeath, null, this);

        //Animations

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('astro', {
                start: 0,
                end: 4
            }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('astro', {
                start: 5,
                end: 9
            }),
            frameRate: 20,
            repeat: -1
        });





        //Energy Orb Controller
        energyOrb = this.physics.add.staticGroup();
        energyOrb.create(200, 400, 'energyOrb');
        this.physics.add.overlap(this.player, energyOrb, collectOrb, null, this);

        //Asteroid Controller

        this.time.addEvent({
            delay: 1500,
            callback: () => {
                this.asteroid = this.physics.add.sprite(Phaser.Math.Between(50, 750), -800, 'asteroid');
                this.asteroid.body.gravity.y = 0.2;
                // this.physics.add.overlap(this.player, this.asteroid, astHit, null, this);
                this.physics.add.collider(this.player, this.asteroid, astHit, null, this);



            },
            loop: true
        })




    } //end Create()

    update() {


        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-varX);


            this.player.anims.play('left', true);

        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(varX);

            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);

            this.player.anims.stop();
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-varY);

        }

        if (this.nKey.isDown) {
            console.log('test!');
        }

        if (this.hKey.isDown) {
            helpMenu.visible = true;

        } else {
            helpMenu.visible = false;

        }

        if (this.nKey.isDown) {
            restartMenu.visible = true;
            if (this.yKey.isDown) {
                console.log("Ykey test");
                restartMenu.visible = false;
                lives = 3;
                this.scene.start("mainGame");
            }
        } else {
            restartMenu.visible = false;
        }





        if (lives == 0) {
            this.scene.start("gameOverScreen");
            lives = 3;

        }

    }

} //end class

function showHelpMenu() {
    this.add.image(400, 400, 'helpMenu');
}

function astHit() {

    collSound.play();

    lives -= 1;
    livesText.setText('Lives: ' + lives);


    this.player.disableBody(true, true);
    this.player = this.physics.add.sprite(400, 620, 'astro');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.player, this.deathPlat, fallToDeath, null, this);
    this.physics.add.overlap(this.player, energyOrb, collectOrb, null, this);
    this.physics.add.collider(this.player, asteroid, astHit, null, this);






}

function fallToDeath(player, deathPlat) {
    fallSound.play();
    lives -= 1;
    livesText.setText('Lives: ' + lives);


    this.player.disableBody(true, true);
    this.player = this.physics.add.sprite(400, 620, 'astro');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.player, this.deathPlat, fallToDeath, null, this);
    this.physics.add.overlap(this.player, energyOrb, collectOrb, null, this);
    this.physics.add.collider(this.player, asteroid, astHit, null, this);



}




function collectOrb(player, energyOrb) {

    orbSound.play();
    energyOrb.disableBody(true, true);
    score += 10;
    scoreText.setText('Score: ' + score);


    spawnNewOrb();
}

function spawnNewOrb() {
    rand = Phaser.Math.Between(1, 9);

    switch (rand) {
        case 1:
            ranX = 500;
            ranY = 500;
            break;
        case 2:
            ranX = 600;
            ranY = 500;
            break;
        case 3:
            ranX = 400;
            ranY = 300;
            break;
        case 4:
            ranX = 250;
            ranY = 400;
            break;
        case 5:
            ranX = 390;
            ranY = 50;
            break;
        case 6:
            ranX = 725;
            ranY = 90;
            break;
        case 7:
            ranX = 50;
            ranY = 90;
            break;
        case 8:
            ranX = 400;
            ranY = 490;
            break;
        case 9:
            ranX = 150;
            ranY = 555;
            break;
        default:
    }

    this.energyOrb.create(ranX, ranY, 'energyOrb');

    return false;
}