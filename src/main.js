window.onload = function () {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: [MainScene, MainMenuScene],
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        }
    };

    game = new Phaser.Game(config);

}