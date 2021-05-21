var nKey;
var themeSong;

var musicConfig = {
    mute: false,
    volume: 0.5,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: false,
    delay: 0
}
class titleScreen extends Phaser.Scene {

    constructor() {
        super('titleScreen');
    } //end

    preload() {

        this.load.image('space', 'assets/images/spaceBg.jpg');
        this.load.image('title', 'assets/images/gameTitle.png');
        this.load.image('rules', 'assets/images/story_controls.png');
        this.load.audio('themeSong', 'assets/sounds/BrokenPromises.mp3');

    } //end preLoad

    create() {

        this.add.image(400, 400, 'space');
        this.add.image(400, 150, 'title');
        this.add.image(420, 500, 'rules');

        themeSong = this.sound.add("themeSong", {
            loop: true
        });

        themeSong.play(musicConfig);

        this.nKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);





    } //end create

    update() {

        if (this.nKey.isDown) {
            console.log('NextGame!');
            this.scene.start("mainGame");
            themeSong.stop();
        }

    } //end update


} //end titleScreen