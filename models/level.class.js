class Level {
    enemies;
    clouds;
    coins;
    backgroundObjects;
    level_end_x = 2250;

    constructor(enemies, clouds, coins, backgroundObjects,) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
    }
}