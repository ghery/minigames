var speed = 100;

var game8state = {

    preload: function() {
      game.load.image('enfant1', 'assets/cochon.png');
      game.load.image('enfant2', 'assets/Perroquet.png');
      game.load.image('enfant3', 'assets/Perroquet_inv.png');
    },

    create: function() {
      enfant1 = game.add.sprite(0, 0, 'enfant1');
      game.physics.enable(enfant1);
      enfant1.scale.setTo(0.15, 0.15);
      enfant1.x = WIDTH/2 - enfant1.width;
      enfant1.y = HEIGHT - enfant1.height;
      enfant1.body.acceleration.x = speed;
      enfant1.body.maxVelocity.x = 140;

      enfant2 = game.add.sprite(0, 0, 'enfant2');
      game.physics.enable(enfant2);
      enfant2.scale.setTo(0.15, 0.15);
      enfant2.x = WIDTH/2 - enfant1.width;
      enfant2.y = HEIGHT - character.height;
      enfant2.body.acceleration.x = speed;
      enfant2.body.maxVelocity.x = 140;
    },

    update: function() {
    }
};
