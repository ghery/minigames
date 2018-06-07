var game5state = {

    direction : 0,
    preload: function() {

    },

    create: function() {
      pauseVar = 0;


        time_text = game.add.text(0, 0, "", time_text_style);

        // Key

        downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        launch_swipe();

        // fond

        tmp = game.add.sprite(0, 0, 'fond'); // utiliser juste pour connaitre la bonne valeur pour faire apparaitre la tilesprite
        tmp.scale.setTo(0.92, 0.92);
        fond = game.add.tileSprite(0 - WIDTH / 2, 0, WIDTH * 2, tmp.height, 'fond');
        //fond.tileScale.y = 0.4;
        //fond.tileScale.x = 0.4;

        //tmp.scale.setTo(0.4, 0.4);
        fond.y = HEIGHT / 2 - tmp.height / 2 * 1.2;
        tmp.destroy();

        // character

        character =  game.add.sprite(0, 0, 'cochonours');
        character.scale.setTo(0.15, 0.15);
        character.x = WIDTH / 2;
        character.y = HEIGHT / 2 - character.height / 2 + 20;

        // table

        table = game.add.sprite(0, 0, 'table');
        table.scale.setTo(0.50, 0.50);
        table.x = character.x + character.width / 2 - table.width / 2;
        table.y = character.y;

        // carton

        carton = game.add.sprite(0, 0, 'carton');
        carton.scale.setTo(0.15, 0.15);
        carton.x = character.x + character.width / 2 - carton.width / 2;
        carton.y = character.y - carton.height + carton.height / 5;

        direction = game.rnd.integer() % 2;
        timer = game.time.create(false);
        timer.start();

        // instructions5

        instructions5 = game.add.image(0, 0, 'instructions5');
        instructions5.x = WIDTH / 2 - instructions5.width / 2;
        instructions5.y =HEIGHT / 8;

        pauseVar = 0;

        //PAUSE
        pauseButton = game.add.image(0, 0, 'pause');
        pauseButton.scale.setTo(0.10, 0.10);
        pauseButton.x = (WIDTH - pauseButton.width);
        pauseButton.y = 0;
        game.input.addPointer();
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

        launchgame5();
    },

    update: function() {
        print_timer(time_text);
        if (pauseVar == 0) {
          fond.tilePosition.x -= 1;
        }
        direction = 0;
        // console.log(direction);
        if (carton.angle != 90 && carton.angle != -90 && pauseVar == 0)
        {
            if (upKey.isDown)
                SWIPE_Y = -1;
            else if (downKey.isDown)
                    SWIPE_Y = 1;
            if (SWIPE_Y == -1)
            {
                carton.x--;
                fond.angle -= 0.02;
                character.y--;
                table.y--;
                carton.y--;
                //game.world.rotation -= 0.001;
            }
            else if (SWIPE_Y == 1)
            {
                //game.world.rotation += 0.001;
                fond.angle += 0.02;
                character.y++;
                table.y++;
                carton.y++;
                carton.x++;

            }
            else if (direction == 0)
            {
                //game.world.rotation -= 0.001;;
                //fond.angle = 10;
                fond.angle -= 0.02;
                character.y--;
                table.y--;
                carton.y--;
                carton.x--;
            }
            else
            {
                //game.world.rotation += 0.001;;
                fond.angle += 0.02;
                character.y++;
                table.y++;
                carton.y++;
                carton.x++;
            }
        }
        this.victory();
    },
    victory: function(){
        if (this.cartonOnTable() && timer.seconds >= TIME_LIMIT)
        {
            game.world.rotation = 0;
            //game.world.setBounds(0, 0, WIDTH, HEIGHT);
            victory("Bravo t’as fait un carton !", 5);
        }
        else if (!this.cartonOnTable()){
            game.world.rotation = 0;
            defeat("En haut, en bas, à droite, à gauche ! Cette soirée là !\nHa non...pardon t’as perdu");
        }
    },

    cartonOnTable : function(){
        var tmp = 21; // ecart avec l asset carton
        if (carton.x <= table.x && (carton.x + carton.width - tmp) <= table.x || carton.x > table.x + table.width && (carton.x + carton.width + tmp) > table.x + table.width)
            return (0);
        return (1);
    }
}

function launchgame5() {
  timer.pause();
  pauseVar = 1;
  //black tween
  black = game.add.image(0, 0, 'black');
  black.alpha = 1;
  tween = game.add.tween(black).to( { alpha: 0 }, 5000, "Linear", true);
  tween.onComplete.add(function(){
    timer.resume();
    pauseVar = 0;
  }, this);
}
