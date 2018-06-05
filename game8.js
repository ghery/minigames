var speed_max = 300;
var speed_min = 100;

var game8state = {

    preload: function() {
      game.load.image('enfant1', 'assets/Cochon.png');
      game.load.image('enfant2', 'assets/Perroquet.png');
      game.load.image('enfant3', 'assets/Perroquet_inv.png');
      game.load.image('instructions', 'assets/Instructions8.png');
    },

    create: function() {
      enfant1 = game.add.sprite(0, 0, 'enfant1');
      game.physics.enable(enfant1);
      enfant1.scale.setTo(0.15, 0.15);
      enfant1.x = WIDTH/2 - enfant1.width;
      enfant1.y = HEIGHT/2 - enfant1.height;
      enfant1.body.acceleration.y = 2000;
      enfant1.body.maxVelocity.y =  speed();
      enfant1.inputEnabled = true;
      enfant1.input.enableDrag(false, true);

      enfant2 = game.add.sprite(0, 0, 'enfant2');
      game.physics.enable(enfant2);
      enfant2.scale.setTo(0.25, 0.25);
      enfant2.x = WIDTH/2 - enfant2.width;
      enfant2.y = HEIGHT/2 - enfant2.height;
      enfant2.body.acceleration.x = 2000;
      enfant2.body.maxVelocity.x = -1 * speed();
      enfant2.inputEnabled = true;
      enfant2.input.enableDrag(false, true);

      enfant3 = game.add.sprite(0, 0, 'enfant3');
      game.physics.enable(enfant3);
      enfant3.scale.setTo(0.25, 0.25);
      enfant3.x = WIDTH/2 - enfant3.width;
      enfant3.y = HEIGHT/2 - enfant3.height;
      enfant3.body.acceleration.x = 2000;
      enfant3.body.maxVelocity.x = speed();
      enfant3.inputEnabled = true;
      enfant3.input.enableDrag(false, true);

      timer = game.time.create(false);
      timer.start();

      time_text = game.add.text(0, 0, "", time_text_style);

      // INSTRUCTIONS

      instructions = game.add.image(0, 0, 'instructions');
      instructions.x = WIDTH / 2 - instructions.width / 2;
      instructions.y = HEIGHT / 5;
    },

    update: function() {
      //ecrire le temps
      print_timer(time_text);

      if(TIME_LIMIT - timer.seconds <= 0){
        victory("Wow bravo ! Tu es un animateur modèle !", 8);
      }

      if(enfant1.y > HEIGHT || (enfant2.x + enfant2.width) < 0 || enfant3.x > WIDTH){
        defeat("Décidément les enfants ce n’est pas ton truc...");
      }
    }
};

function speed() {
  var speed = game.rnd.integer() % speed_max;
  while (speed <= speed_min) {
    speed = game.rnd.integer() % speed_max;
  }
  return(speed);
}
