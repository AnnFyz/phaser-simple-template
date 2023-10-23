class MainMenuScene extends Phaser.Scene {
    constructor() {
        super('MainMenuScene');
    }

    preload() {
        scene.load.scenePlugin('rexuiplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js', 'rexUI', 'rexUI');
        this.load.image('button', 'assets/UI_Panel_Background_5-04.png');
        this.button = {};
    }
    create() {
        this.cameras.main.fadeIn(2000);
        console.log("mainMenu");
        var text = this.add.text(game.config.width / 2, game.config.height / 2, "main menu", { font: "32px Arial", fill: "#FFFFFF", align: "center" });
        text.setOrigin(.5, .5);
        this.createButton(this);
    }

    createButton(scene) {
        scene.button = scene.add.button(game.config.width / 2, game.config.height / 2, 'button', scene.actionOnClick, scene, 2, 1, 0);
        console.log("Button was created");
    }

    actionOnClick() {
        console.log("MainScene");
        //this.scene.start('MainScene');    

    }
}
