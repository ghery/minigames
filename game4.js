var game4state = {

    preload: function() {
      game.load.image('round', 'assets/round.png');
      game.load.image('centre', 'assets/centre_social.png');
      game.load.image('instructions', 'assets/Instructions4.png');
    },

    create: function() {

      centre = game.add.sprite(0, 0, 'centre');
      centre.scale.setTo(0.5, 0.5);
      centre.x = ((game.rnd.integer() % WIDTH - 50) - centre.width/2);
      centre.y = ((game.rnd.integer() % HEIGHT - 50) - centre.height/2);

      round = game.add.sprite(0, 0, 'round');
      round.scale.setTo(2, 2);
      round.x = (game.world.centerX - round.width/2);
      round.y = (game.world.centerY - round.height/2);

      game.physics.enable(round, Phaser.Physics.ARCADE);
      game.input.addPointer();

      timer = game.time.create(false);
      timer.start();

      time_text = game.add.text(0, 0, "", time_text_style);

      // INSTRUCTIONS

      instructions = game.add.image(0, 0, 'instructions');
      instructions.x = WIDTH / 2 - instructions.width / 2;
      instructions.y = HEIGHT / 3;
    },

    update: function() {
      //ecrire le temps
      print_timer(time_text);

      //mouvement rond
      if (game.input.onUp)
      {
          //  1000 is the speed it will move towards the mouse
          game.physics.arcade.moveToXY(round, game.input.x - round.width/2, game.input.y - round.height/2, 1000, 0);

          if ((((round.x + round.width/2) >= (game.input.x - 25)) & ((round.x + round.width/2) <= (game.input.x + 25)))
          & (((round.y + round.height/2) >= (game.input.y - 25)) & ((round.y + round.height/2) <= (game.input.y + 25)))){
            round.body.velocity.setTo(0, 0);
          }

          if (Phaser.Rectangle.contains(game.input.x, game.input.y))
          {
              portefeuille.body.velocity.setTo(0, 0);
          }
      }
      else
      {
          round.body.velocity.setTo(0, 0);
      }

      // condition de victoire
    if ((((round.x + round.width/2) >= (centre.x - 30 + centre.width/2)) & ((round.x + round.width/2) <= (centre.x + 30 + centre.width/2)))
    & (((round.y + round.height/2) >= (centre.y - 30 + centre.height/2)) & ((round.y + round.height/2) <= (centre.y + 30 + centre.height/2)))){

        round.body.velocity.setTo(0, 0);
        victory("Waouh...Plus rapide que la lumière !");
    }

    if(TIME_LIMIT - timer.seconds <= 0){
      defeat("Tu n’as pas trouvé le centre social à temps !");
    }
    }
};
