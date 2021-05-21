var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 900,
    autoCenter: true,
    backgroundColor: '#ffffcc',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('beach', 'assets/beachBg.png');
    this.load.image('crab', 'assets/crab.png');
    this.load.image('seagull', 'assets/seagull.png');
    this.load.image('castle', 'assets/castle.png');
}

function create() {

    this.add.image(400, 300, 'beach');

    var crab = this.add.sprite(100, 850, 'crab');
    var seagull = this.add.sprite(300, 800, 'seagull');
    var castle = this.add.sprite(600, 850, 'castle');

    crab.setInteractive();
    seagull.setInteractive();
    castle.setInteractive();

    this.input.setDraggable(crab);
    this.input.setDraggable(seagull);
    this.input.setDraggable(castle);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}