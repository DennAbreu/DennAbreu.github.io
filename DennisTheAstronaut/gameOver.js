var nKey;
var musicConfig = {
    mute: false,
    volume: 0.5,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: false,
    delay: 0
}

var endSong;
class gameOverScreen extends Phaser.Scene {

    constructor() {
        super('gameOverScreen');
    } //end

    preload() {

        this.load.image('space', 'assets/images/spaceBg.jpg');
        this.load.image('gameOver', 'assets/images/gameOver.png');
        this.load.image('restartGame', 'assets/images/restartGame.png')
        this.load.audio('endSong', 'assets/sounds/BrokenPromises.mp3');

    } //end preLoad

    create() {

        this.add.image(400, 400, 'space');
        this.add.image(400, 150, 'gameOver');
        this.add.image(420, 500, 'restartGame');

        this.nKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);

        endSong = this.sound.add("themeSong", {
            loop: true
        });

        endSong.play(musicConfig);





    } //end create

    update() {

        if (this.nKey.isDown) {
            console.log('NextGame!');
            this.scene.start("mainGame");
            endSong.stop();
        }

    } //end update


} //end titleScreen