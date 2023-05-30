class Coins extends MovableObject {

    x = 250;
    y = 100;

    constructor() {
        super().loadImage('../img/8_coin/coin_2.png');

        this.x =  450 + Math.random() * 1500;
        this.y;
    }
}