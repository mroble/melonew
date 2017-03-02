var StateLoad = {

    preload: function () {

        var empty = game.add.image(0, 0, "loadingEmpty");
        var full = game.add.image(0, 0, "loadingFull");

        center(empty);
        full.anchor.set(0, 0.5);
        full.x = game.world.centerX - empty.width / 2;
        full.y = empty.y;

        game.load.setPreloadSprite(full);

        //PRELOAD EVERYTHING HERE
        game.load.spritesheet("buttons", "assets/images/ui/buttons-red.png", 265, 75);
        game.load.spritesheet("soundButtons", "assets/images/ui/soundButtons-blue.png", 44, 44, 4);
        game.load.audio("backgroundMusic", "assets/audio/bubbling.wav");
        game.load.audio("coin", "audio/Pickup-Coin.wav");
    },

    create: function () {
        game.state.start("StateTitle");
    },

    update: function () {
        
    }

}