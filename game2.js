var game2state = {

    preload: function() {
      game.load.image('portefeuille', 'assets/portefeuille.png');
    },

    create: function() {
      portefeuille = game.add.sprite(game.world.centerX, game.world.centerY, 'portefeuille');
      portefeuille.scale.setTo(0.5, 0.5);
     game.physics.enable(portefeuille, Phaser.Physics.ARCADE);
    },

    update: function() {
        //console.log(timer.seconds);
        //console.log(character.width);
    if (game.input.mousePointer.isDown)
    {
        //  400 is the speed it will move towards the mouse
        game.physics.arcade.moveToPointer(portefeuille, 600);

        //  if it's overlapping the mouse, don't move any more
        if (Phaser.Rectangle.contains(portefeuille.body, game.input.x, game.input.y))
        {
            portefeuille.body.velocity.setTo(0, 0);
        }
    }
    else
    {
        portefeuille.body.velocity.setTo(0, 0);
    }
    }
};
