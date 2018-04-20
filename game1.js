var speed = -100;

var gamestate = {

    preload: function() {
      game.load.image('cochonours', 'assets/Cochonours_vector.png');
      game.load.image('instructions', 'assets/Instructions_jeu1.png');
      game.load.image('route', 'assets/Route_jeu1.png');
      game.load.image('caf', 'assets/CAF.png');
      //preload_font();
    },

    create: function() {
     time_text = game.add.text(0, 0, "", time_text_style);
     game.physics.startSystem(Phaser.Physics.ARCADE);

     //create all button use

     // INSTRUCTIONS

     instructions = game.add.image(0, 0, 'instructions');
     instructions.x = WIDTH / 2 - instructions.width / 2;
     instructions.y = HEIGHT / 3;
     // ROUTE

     tmp = game.add.sprite(0, 0, 'route'); // utiliser juste pour connaitre la bonne valeur pour faire apparaitre la tilesprite
     tmp.y = HEIGHT - tmp.height;
     route = game.add.tileSprite(0, 0, WIDTH, HEIGHT, 'route');
     route.y = HEIGHT - tmp.height;

     // Caf
     caf = game.add.sprite(WIDTH, 0, 'caf');
     caf.y = HEIGHT - caf.height

     // CHARACTER

     character =  game.add.sprite(0, 0, 'cochonours');
     game.physics.enable(character);
     character.scale.setTo(0.15, 0.15)
     character.x = 350;
     character.y = HEIGHT - character.height;
     character.body.acceleration.x = speed;
     character.body.maxVelocity.x = 140;

     timer = game.time.create(false);
     timer.start(); // quand timer fini, use destroy

     game.input.addPointer();
     game.input.onUp.add(function ()
     {
         character.x += 30;
     }, this);
    },

    update: function() {
        print_timer(time_text);
        route.tilePosition.x -= 2;
        if (TIME_LIMIT - timer.seconds < 2)
            caf.x -= 2;
        if (this.victory() != 0) // -1 defeat, 1 victory
            timer.destroy();
    },
    victory: function(){
        if (character && character.x && character.height)
        {
            if (character.x < 0 && character.x + character.height < 0)
            {
                this.defeat();
                return (-1);
            }
            else if (timer.seconds >= TIME_LIMIT && character.x + character.height > 0)
            {
                victory("Bravo tu es arrivé à l'heure !");
                return (1);
            }
        }
        return (0);
    },
    defeat: function(){
        defeat("Oups, tu n'as pas couru assez vite !\nTu as raté ton rendez-vous CAF !");
    }
};
