var nb_papier = 20;
var ecran;
var score = 0;

var game6state = {

    preload: function() {
    },

    create: function() {
      pauseVar = 0;

      //PAUSE
      pauseButton = game.add.image(0, 0, 'pause');
      pauseButton.scale.setTo(0.10, 0.10);
      pauseButton.x = (WIDTH - pauseButton.width);
      pauseButton.y = 0;

      game.input.onUp.add(function ()
      {
          if (game.input.x <= (Menu.x + Menu.width) && game.input.x >= Menu.x && game.input.y <= (Menu.y + Menu.height) && game.input.y >= Menu.y)
          {
             Pause(0);
             game.state.start('menustate');
          }
        if (game.input.x > (WIDTH - pauseButton.width) && game.input.y < pauseButton.height && pauseVar == 0) {
          Pause(1);
        }
        else if (game.input.x > (WIDTH - (pauseButton.width + 5)) && game.input.y < (pauseButton.height + 5) && pauseVar == 1) {
         Pause(0);
        }
      }, game);

      score = 0;

      ecran = game.add.sprite(0, 0, 'ecran');
      ecran.x = game.world.centerX;
      ecran.y = game.world.centerY - ecran.height/2;
      game.physics.enable(ecran, Phaser.Physics.ARCADE);
      // game.add.sprite(game.world.centerX, 720, 'papier');
      //  Here we'll create a new Group
    papiers = game.add.group();
    var i = nb_papier;
    //  And add 10 sprites to it
    while (i > 0)
    {
        //  Create a new sprite at a random world location
        papier = game.add.sprite((game.world.centerX - game.world.centerX/1.5), (game.world.centerY + (i * 4)), 'papier');
        papier.name = 'papier' + i;
        papier.inputEnabled = true;
        papier.input.enableDrag(false, true);
        if (pauseVar == 0) {
          papier.events.onDragStop.add(onDragStop, this);
        }

        papiers.add(papier);
        i--;
    }

    timer = game.time.create(false);
    timer.start();

    time_text = game.add.text(0, 0, "", time_text_style);

    // ouverture6

    ouverture6 = game.add.image(0, 0, 'ouverture6');
    ouverture6.x = WIDTH / 2 - ouverture6.width / 2;
    ouverture6.y = HEIGHT / 8;

    launchgame6();
    },

    update: function() {
      //ecrire le temps
      print_timer(time_text);

      if(score == nb_papier){
        victory("Plus rapide qu’un scanner super puissant !", 6);
      }

      if(TIME_LIMIT - timer.seconds <= 0){
        defeat("Bon courage avec tes papiers ...");
      }
    }
};

function onDragStop(papier, pointer) {
  if (checkOverlap(ecran, papier) && pauseVar == 0)
    {
      papier.destroy();
      score += 1;
      // console.log("score:" + score);
    }
}

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}

function launchgame6() {
  timer.pause();
  pauseVar = 1;
  //black tween
  black = game.add.image(0, 0, 'black');
  black.alpha = 1;
  tween = game.add.tween(black).to( { alpha: 0 }, 5000, "Linear", true);
  tween.onComplete.add(function(){
    timer.resume();
    pauseVar = 0;
    ouverture6.destroy();
    instructions6 = game.add.image(0, 0, 'instructions6');
    instructions6.x = WIDTH / 2 - instructions6.width / 2;
    instructions6.y = HEIGHT / 8;
  }, this);
}
