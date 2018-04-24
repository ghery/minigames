var nbBillet = 22;
var score = 0;
var Billetvelocity = 800;

var game2state = {

    preload: function() {
      game.load.image('portefeuille', 'assets/portefeuille.png');
      game.load.image('Billet', 'assets/Billets.png');
    },

    create: function() {
      portefeuille = game.add.sprite(game.world.centerX, 700, 'portefeuille');
      portefeuille.scale.setTo(0.5, 0.5);

      timer = game.time.create(false);
      timer.start();

     game.physics.enable(portefeuille, Phaser.Physics.ARCADE);
     game.input.addPointer();
     groupBillet = game.add.group();
     game.time.events.repeat(Phaser.Timer.SECOND, nbBillet, function(){
       var Billet = groupBillet.create(game.world.randomX, -200, 'Billet');
       Billet.scale.setTo(0.25, 0.25);
       game.physics.enable(Billet);

       Billet.body.acceleration.y = 600;
       Billet.body.maxVelocity.y = Billetvelocity;
     }, this);
     score = 0;
    },

    update: function() {
        //console.log(timer.seconds);
        //console.log(character.width);
        game.physics.arcade.overlap(portefeuille, groupBillet, collisionHandeler, null, this);
    if (game.input.onUp)
    {
        //  400 is the speed it will move towards the mouse
        game.physics.arcade.moveToPointer(portefeuille, 1000);

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
      defeat("Tu n'en as pas recuperé assez desolé");
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
  console.log("score:", score);
  if (score == 20){
    victory("Bravo tu en attrapé assez!");
  }
}

// function createBillet(){
//   var Billet = Billets.create(game.world.randomX, -200, 'Billet');
//   Billet.scale.setTo(0.25, 0.25);
//   game.physics.enable(Billet);
//
//   Billet.body.acceleration.y = 200;
//   Billet.body.maxVelocity.y = 300;
// }
