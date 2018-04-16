var speed = -10;

var gamestate = {

    preload: function() {
      game.load.image('cat', 'assets/cat_head.png');
    },

    create: function() {
     game.physics.startSystem(Phaser.Physics.ARCADE);
     //create all button use
     character =  game.add.sprite(300, 350, 'cat');
     character.scale.setTo(0.5, 0.5)
     game.physics.enable(character);
     //character.body.collideWorldBounds = true;
     character.body.acceleration.x = speed;
     character.body.maxVelocity.x = 40;
     timer = game.time.create(false);
     timer.start(); // quand timer fini, use destroy
     game.input.addPointer();
     game.input.onUp.add(function ()
     {
         character.x += 30;
     }, this);
    },

    update: function() {
        //console.log(timer.seconds);
        //console.log(character.width);
        victory();
    }
};
