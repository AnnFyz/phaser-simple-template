class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }
    preload() {
        this.load.image('pizza', 'assets/DrinksOrange.png');
    }

    create() {
       this.pizza = this.add.image(100, 100, 'pizza');

    }
}
