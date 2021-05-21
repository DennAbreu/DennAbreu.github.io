var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    autoCenter: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var platforms;
var player;
var cursors;
var energyOrb;
var asteroid;

var varX = 160;
var varY = 350;

var score = 0;
var scoreText;
var lives;
var livesText;
var gameOver = false;

var rand;
var rTemp = 0;
var ranX;
var ranY;


var game = new Phaser.Game(config);

function preload() {

    this.load.image('space', 'assets/spaceBg2.jpg');
    this.load.image('shortPlat', 'assets/shortPlat.png');
    this.load.image('startPlat', 'assets/startPlat.png');
    this.load.image('energyOrb', 'assets/sprites/energyOrb.png');
    this.load.image('asteroid', 'assets/sprites/ast.png');
    this.load.spritesheet('astro', 'assets/sprites/spritesheet.png', {
        frameWidth: 50,
        frameHeight: 61
    });

}

function create() {

    lives = 3;

    this.add.image(400, 400, 'space');


    scoreText = this.add.text(0, 0, 'Score: 0', {
        fontSize: '28px',
        fill: '#fff'
    });
    livesText = this.add.text(1, 25, 'Lives: 3', {
        fontSize: '28px',
        fill: '#fff'
    });

    // this.add.image(100, 300, 'shortPlat');
    // this.add.image(400, 300, 'energyOrb');

    platforms = this.physics.add.staticGroup();

    //top left platform
    platforms.create(100, 300, 'shortPlat');
    //top right platform
    platforms.create(750, 300, 'shortPlat');
    //top platform
    platforms.create(400, 120, 'shortPlat');
    //bottom left platform
    platforms.create(150, 600, 'shortPlat');
    //middle platform
    platforms.create(400, 400, 'shortPlat');
    //bottom right platform
    platforms.create(650, 550, 'shortPlat');

    //starting Point
    platforms.create(400, 750, 'startPlat');

    // Used this to test sprite sizing
    // this.add.image(400, 680, 'astro');

    player = this.physics.add.sprite(400, 620, 'astro');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

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



    this.physics.add.collider(player, platforms);

    cursors = this.input.keyboard.createCursorKeys();


    energyOrb = this.physics.add.staticGroup();
    energyOrb.create(200, 400, 'energyOrb');

    asteroid = this.physics.add.group();
    this.physics.add.collider(player, asteroid, astHit, null, this);


    this.physics.add.overlap(player, energyOrb, collectOrb, null, this);
}

function astHit() {

    this.physics.pause();
    lives -= 1;
    livesText.setText('Lives: ' + lives);

    if (lives == 0) {
        gameOver = true;
    }

}

function collectOrb(player, energyOrb) {
    energyOrb.disableBody(true, true);

    score += 10;
    scoreText.setText('Score: ' + score);

    if (score == 50) {
        gameOver = true;
    } else {
        spawnNewOrb();
    }
    // if(!didHeWinYet()){
    //     spawnNewOrb();
    // }else{
    //     gameOver();
    // }


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

    energyOrb.create(ranX, ranY, 'energyOrb');
}

function update() {

    // if(gameOver){
    //     endGame();
    // }



    if (cursors.left.isDown) {
        player.setVelocityX(-varX);

        player.anims.play('left', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(varX);

        player.anims.play('right', true);
    } else {
        player.setVelocityX(0);

        player.anims.play('stop');
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-varY);

    }
}