class MainMenuScene extends Phaser.Scene {
    constructor() {
        super('MainMenuScene');
    }

    preload() {
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
        this.load.image('button', 'assets/UI_Panel_Background_5-04.png');
        this.button = {};

    }
    create() {
        this.cameras.main.fadeIn(2000);
        console.log("mainMenu");
        var text = this.add.text(game.config.width / 2, game.config.height / 2, "main menu", { font: "32px Arial", fill: "#FFFFFF", align: "center" });
        text.setOrigin(.5, .5);
        // this.createButton(this);
       
    }

    /*createButton(scene) {
        scene.button = scene.add.button(game.config.width / 2, game.config.height / 2, 'button', scene.actionOnClick, scene, 2, 1, 0);
        console.log("Button was created");
    }
*/
    createButtons(scene) {
        scene.buttons = scene.rexUI.add.buttons({
            x: 400, y: 300,
            orientation: 'y',

            buttons: [
                createButton(this, 'A'),
                createButton(this, 'B'),
            ],

            space: { item: 8 }

        })
    }

    actionOnClick() {
        console.log("MainScene");
        //this.scene.start('MainScene');    

    }
}
