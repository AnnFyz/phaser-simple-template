const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

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
        var buttons = this.rexUI.add.buttons({
            x: game.config.width / 2, y: game.config.height / 2 + 150,
            orientation: 'x',

            buttons: [
                createButton(this, 'Continue'),
                createButton(this, 'B'),
            ],

            space: { item: 25 }

        }).layout()

        let loadMainScene = () => {
            this.scene.start('MainScene');
           let mainScene= this.scene.get('MainScene');
           mainScene.was
        }

        var print = this.add.text(0, 0, '');
        buttons
            .on('button.click', function (button, index, pointer, event) {
                print.text += `Click button-${button.text}\n`;
                button.scaleX = .85;
                button.scaleY = button.scaleX;
                buttons.setButtonEnable(false)
                setTimeout(() => {
                    buttons.setButtonEnable(true)
                    button.scaleX = 1;
                    button.scaleY = button.scaleX;
                }, 300);
                setTimeout(() => { loadMainScene();}, 500);
                
            })
            .on('button.out', function () {
                print.text += 'Pointer-out\n';
            })
            .on('button.over', function () {
                print.text += 'Pointer-over\n';
            })

    }

    update() { }
}

var createButton = function (scene, text) {
    return scene.rexUI.add.label({
        width: 200,
        height: 80,
        background: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0x57EAB3),
        text: scene.add.text(0, 0, text, {
            fontSize: 25
        }),
        space: {
            left: 10,
            right: 10,
        }
    });
}