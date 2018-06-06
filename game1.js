var Speed = -100;
var pauseVar = 0;

var gamestate = {

    preload: function() {
      //preload_font();
    },

    create: function() {
     time_text = game.add.text(0, 0, "", time_text_style);
     game.physics.startSystem(Phaser.Physics.ARCADE);

     //create all button use

     //PAUSE
     pauseButton = game.add.image(0, 0, 'pause');
     pauseButton.scale.setTo(0.10, 0.10);
     pauseButton.x = (WIDTH - pauseButton.width);
     pauseButton.y = 0;

     // INSTRUCTIONS

     instructions = game.add.image(0, 0, 'instructions');
     instructions.x = WIDTH / 2 - instructions.width / 2;
     instructions.y = HEIGHT / 3;

     // ROUTE

     tmp = game.add.sprite(0, 0, 'route'); // utiliser juste pour connaitre la bonne valeur pour faire apparaitre la tilesprite
     tmp.y = HEIGHT - tmp.height;
     tmp.destroy();
     route = game.add.tileSprite(0, 0, WIDTH, HEIGHT, 'route');
     route.y = HEIGHT - tmp.height;

     // Caf
     caf = game.add.sprite(WIDTH, 0, 'caf');
     caf.y = HEIGHT - caf.height

     // CHARACTER

     character =  game.add.sprite(0, 0, 'cochonours');
     game.physics.enable(character);
     character.scale.setTo(0.15, 0.15);
     character.x = 350;
     character.y = HEIGHT - character.height;
     character.body.acceleration.x = Speed;
     character.body.maxVelocity.x = 140;

     timer = game.time.create(false);
     timer.start(); // quand timer fini, use destroy

     game.input.addPointer();
     game.input.onUp.add(function ()
     {
       if (game.input.x > (WIDTH - pauseButton.width) && game.input.y < pauseButton.height && pauseVar == 0) {
         Pause(1);
       }
       else if (pauseVar == 0) {
        character.x += 30;
       }
       else if (game.input.x > (WIDTH - (pauseButton.width + 5)) && game.input.y < (pauseButton.height + 5) && pauseVar == 1) {
        Pause(0);
       }
     }, game);
    },

    update: function() {
        print_timer(time_text);
        route.tilePosition.x -= 2;
        if (TIME_LIMIT - timer.seconds < 2)
            caf.x -= 2;
        if (victory1() != 0) // -1 defeat, 1 victory
            timer.destroy();
    }
};


function victory1(){
    if (character && character.x && character.height)
    {
        if (character.x < 0 && character.x + character.height < 0)
        {
            defeat("Oops... tu n'as pas couru assez vite !\nTu as raté ton rendez-vous à la Caf !");
            return (-1);
        }
        else if (timer.seconds >= TIME_LIMIT && character.x + character.height > 0)
        {
            victory("Rien ne sert de courir...");
            return (1);
        }
    }
    return (0);
}
