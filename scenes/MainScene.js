class MainScene extends Phaser.Scene {
    
    constructor() {
        super('MainScene');
        this.wasClicked = false;
    }
    preload() {
        this.load.image('pizza', 'assets/PizzaBG.png');
    }

    create() {
        this.pizza = this.add.image(game.config.width / 2, game.config.height / 2, 'pizza');
        this.pizza.scaleX *= .5;
        this.pizza.scaleY *= this.pizza.scaleX;
        this.pizza.alpha = .5;
        this.pizza.setInteractive();
        this.pizza.on('pointermove', function () {
            this.pizza.alpha = 1;
        }, this);
        this.pizza.on('pointerout', function () {
            this.pizza.alpha = .5;
        }, this);

    
        this.pizza.on('pointerdown', this.OnDown, this);

    }

    OnDown() {
        if (!this.wasClicked) {
            this.pizza.scaleX *= .75;
            //this.pizza.scaleY *= this.pizza.scaleX; Doesn't work !!!
            this.pizza.scaleY *= .75;
            this.wasClicked = true; // use Tweens for click effect
            this.scene.start('MainMenuScene');      
        }
       
    }

    update(){
        console.log("wasClicked " + this.wasClicked)
    }
}
