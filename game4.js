var pauseVar;

var game4state = {

    preload: function() {
    },

    create: function() {
      pauseVar = 0;

      centre = game.add.sprite(0, 0, 'centre');
      centre.scale.setTo(0.5, 0.5);
      centre.x = ((game.rnd.integer() % WIDTH - 50) - centre.width/2);
      centre.y = ((game.rnd.integer() % HEIGHT - 50) - centre.height/2);

      round = game.add.sprite(0, 0, 'round');
      round.scale.setTo(2, 2);
      round.x = (game.world.centerX - round.width/2);
      round.y = (game.world.centerY - round.height/2);

      //PAUSE
      pauseButton = game.add.image(0, 0, 'pause');
      pauseButton.scale.setTo(0.10, 0.10);
      pauseButton.x = (WIDTH - pauseButton.width);
      pauseButton.y = 0;

      game.input.onUp.add(function ()
      {
        if (game.input.x > (WIDTH - pauseButton.width) && game.input.y < pauseButton.height && pauseVar == 0) {
          Pause(1);
        }
        else if (game.input.x > (WIDTH - (pauseButton.width + 5)) && game.input.y < (pauseButton.height + 5) && pauseVar == 1) {
         Pause(0);
        }
      }, game);

      game.physics.enable(round, Phaser.Physics.ARCADE);


      timer = game.time.create(false);
      timer.start();

      time_text = game.add.text(0, 0, "", time_text_style);

      // ouverture4

      ouverture4 = game.add.image(0, 0, 'ouverture4');
      ouverture4.x = WIDTH / 2 - ouverture4.width / 2;
      ouverture4.y =HEIGHT / 8;

      launchgame4();
    },

    update: function() {
      //ecrire le temps
      print_timer(time_text);

      //mouvement rond
      if (game.input.onUp && pauseVar == 0)
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
      if (pauseVar == 0){
        round.body.velocity.setTo(0, 0);
        victory("Waouh...Plus rapide que la lumière !", 4);
      }
    }

    if(TIME_LIMIT - timer.seconds <= 0){
      defeat("Tu n’as pas trouvé le centre social à temps !");
    }
    }
};


function launchgame4() {
  timer.pause();
  pauseVar = 1;
  //black tween
  black = game.add.image(0, 0, 'black');
  black.alpha = 1;
  tween = game.add.tween(black).to( { alpha: 0 }, 5000, "Linear", true);
  tween.onComplete.add(function(){
    timer.resume();
    pauseVar = 0;
    ouverture4.destroy();
    instructions4 = game.add.image(0, 0, 'instructions4');
    instructions4.x = WIDTH / 2 - instructions4.width / 2;
    instructions4.y =HEIGHT / 8;
  }, this);
}
