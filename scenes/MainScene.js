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
        this.pizza.scaleX *= .35;
        this.pizza.scaleY *= this.pizza.scaleX;
        this.pizza.alpha = .5;
        this.pizza.setInteractive();
        this.pizza.on('pointermove', function () {
            this.pizza.alpha = 1;
        }, this);
        this.pizza.on('pointerout', function () {
            this.pizza.alpha = .5;
        }, this);

    
        this.pizza.on('pointerdown', this.onDown, this);

    }

    onDown() {
        if (!this.wasClicked) {
            this.pizza.scaleX = .25;
            this.pizza.scaleY = this.pizza.scaleX;
            this.wasClicked = true; // use Tweens for click effect
            setTimeout(() => {
                this.wasClicked = false;    
                this.pizza.scaleX = .35;
                this.pizza.scaleY = this.pizza.scaleX;
            }, 300);

            setTimeout(() => { this.scene.start('MainMenuScene');}, 300);
              
        }
       
    }

    update(){
        console.log("wasClicked " + this.wasClicked)
    }

}
