const startBtn = document.getElementById('startBtn');
var game;

startBtn.onclick = function () {
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
        scene: [titleScreen, mainGame, gameOverScreen]
    };

    game = new Phaser.Game(config);

    startBtn.disabled = "disabled";

}