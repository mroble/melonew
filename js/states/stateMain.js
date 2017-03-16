var StateMain = {

    preload: function () {
        game.load.spritesheet("melo", "assets/images/main/melospritesheet.png", 100, 100, 6);
        game.load.image("tiles", "assets/images/main/spritesheet_melo.png");
        game.load.tilemap("map","maps/map1.json", null, Phaser.Tilemap.TILED_JSON);

    },

    create: function () {

        game.physics.startSystem(Phaser.Physics.ARCADE);

        //load map
        this.map=game.add.tilemap("map");
        this.map.addTilesetImage("tiles");

        this.layer=this.map.createLayer("Background");

        this.layer=this.map.createLayer("Foreground");
        this.layer.resizeWorld();
        this.map.setCollisionBetween(0,17, true, 'Foreground');


        this.melo=game.add.sprite(150, 150, "melo");
        this.melo.animations.add("idle", [0,1,2], 12, true);
        this.melo.animations.add("walk", [3,4], 12, true);
        this.melo.animations.add("jump", [5], 12, false);

        this.melo.animations.play("idle");
        this.melo.anchor.set(0.5, 0.5);
        game.physics.arcade.enable(this.melo);
        this.melo.body.gravity.y=100;
        this.melo.body.bounce.set(0.25);
        this.melo.body.collideWorldBound=true;

        game.camera.follow(this.melo);

        //reset the score
        score = 0;

        //add sound buttons
        this.btnMusic = gameButtons.addAudioButton("music", 20, 20, gameButtons.toggleMusic, this);
        this.btnSound = gameButtons.addAudioButton("sound", 20, 70, gameButtons.toggleSound, this);

        //if using a scrolling game uncomment these lines
        //this.audioGroup=game.add.group();
        //this.audioGroup.fixedToCamera=true;

        //define sounds here
        //this.elephant = game.add.audio("elephant");

        //define background music
        this.backgroundMusic = game.add.audio("backgroundMusic");
        //pass the background music to the gameMedia object
        gameMedia.setBackgroundMusic(this.backgroundMusic);

        //init the music
        gameMedia.updateMusic();
        //init the sound buttons
        gameButtons.updateButtons();
    },

    update: function () {
        game.physics.arcade.collide(this.melo, this.layer);


    }


}