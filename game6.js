var nb_papier = 20;
var ecran;
var score = 0;

var game6state = {

    preload: function() {
      game.load.image('papier', 'assets/Papier_2.png');
      game.load.image('ecran', 'assets/Ecran.png');
    },

    create: function() {
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
        papier.events.onDragStop.add(onDragStop, this);

        papiers.add(papier);
        i--;
    }

    timer = game.time.create(false);
    timer.start();

    time_text = game.add.text(0, 0, "", time_text_style);
    },

    update: function() {
      //ecrire le temps
      print_timer(time_text);

      if(score == nb_papier){
        victory("victoire papier");
      }

      if(TIME_LIMIT - timer.seconds <= 0){
        defeat("Tu ne l'as pas trouver a temps");
      }
    }
};

function onDragStop(papier, pointer) {
  if (checkOverlap(ecran, papier))
    {
      papier.destroy();
      score += 1;
      console.log("score:" + score);
    }
}

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}
