var nbBillet = 22;
var score = 0;
var Billetvelocity = 800;
var pauseVar;

var game2state = {

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
        if (game.input.x > (WIDTH - pauseButton.width) && game.input.y < pauseButton.height && pauseVar == 0) {
          Pause(1);
        }
        else if (game.input.x > (WIDTH - (pauseButton.width + 5)) && game.input.y < (pauseButton.height + 5) && pauseVar == 1) {
         Pause(0);
        }
      }, game);

      portefeuille = game.add.sprite(game.world.centerX, 700, 'portefeuille');
      portefeuille.scale.setTo(0.25, 0.25);
      salaire = game.add.sprite(game.world.centerX, 0, 'salaire');
      salaire.scale.setTo(0.30, 0.30);

      timer = game.time.create(false);
      timer.start();

     game.physics.enable(portefeuille, Phaser.Physics.ARCADE);

     groupBillet = game.add.group();
     if (pauseVar == 0){
     game.time.events.repeat(Phaser.Timer.SECOND, nbBillet, function(){
       var billetX = randomX();
       salaire.x = billetX;
       var Billet = groupBillet.create(billetX, -200, 'Billet');
       Billet.scale.setTo(0.3, 0.3);
       game.physics.enable(Billet);

       Billet.body.acceleration.y = 600;
       Billet.body.maxVelocity.y = Billetvelocity;
     }, game);
    }
     score = 0;

     // ouverture2

     ouverture2 = game.add.image(0, 0, 'ouverture2');
     ouverture2.x = WIDTH / 2 - ouverture2.width / 2;
     ouverture2.y = HEIGHT / 8;
     launchgame2();
    },

    update: function() {
        game.physics.arcade.overlap(portefeuille, groupBillet, collisionHandeler, null, game);
    if (game.input.onUp)
    {
        //  400 is the speed it will move towards the mouse
        game.physics.arcade.moveToPointer(portefeuille, 1500);

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
    if (timer.seconds >= (nbBillet + 3))
    {
      defeat("Woaw tu as battu un record de médiocrité !");
    }
    // if (portefeuille.body){
    //   Billet.destroy();
    //   score += 1;
    // }

    }
};

function collisionHandeler(obj1, obj2){
  obj2.destroy();
  score += 1;
  if (score == 20){
    victory("L'argent ne tombe pas du ciel tu l'as bien mérité !");
  }
}

function randomX() {
  var x = game.rnd.integer() % WIDTH - 100;
  while (x < 0){
    x = game.rnd.integer() % WIDTH - 100;
  }
  return(x);
}

function launchgame2() {
  timer.pause();
  pauseVar = 1;
  //black tween
  black = game.add.image(0, 0, 'black');
  black.alpha = 1;
  tween = game.add.tween(black).to( { alpha: 0 }, 5000, "Linear", true);
  tween.onComplete.add(function(){
    timer.resume();
    pauseVar = 0;
    ouverture2.destroy();
    instructions2 = game.add.image(0, 0, 'instructions2');
    instructions2.x = WIDTH / 2 - instructions2.width / 2;
    instructions2.y = HEIGHT / 8;
  }, this);
}

// function createBillet(){
//   var Billet = Billets.create(game.world.randomX, -200, 'Billet');
//   Billet.scale.setTo(0.25, 0.25);
//   game.physics.enable(Billet);
//
//   Billet.body.acceleration.y = 200;
//   Billet.body.maxVelocity.y = 300;
// }
