var game5state = {

    direction : 0,
    preload: function() {
      game.load.image('cochonours', 'assets/Cochonours_vector.png');
      game.load.image('carton', 'assets/carton.png');
      game.load.image('table', 'assets/table.png');
      game.load.image('fond', 'assets/fondCouloir.png');
      game.load.image('instructions', 'assets/Instructions5.png');
    },

    create: function() {
        time_text = game.add.text(0, 0, "", time_text_style);

        // Key

        downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        launch_swipe();

        // fond

        tmp = game.add.sprite(0, 0, 'fond'); // utiliser juste pour connaitre la bonne valeur pour faire apparaitre la tilesprite
        //tmp.scale.setTo(0.4, 0.4);
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
        character.y = HEIGHT / 2 - character.height / 2;

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

        // INSTRUCTIONS

        instructions = game.add.image(0, 0, 'instructions');
        instructions.x = WIDTH / 2 - instructions.width / 2;
        instructions.y = HEIGHT / 3;
    },

    update: function() {
        print_timer(time_text);
        fond.tilePosition.x -= 1;
        direction = 0;
        // console.log(direction);
        if (carton.angle != 90 && carton.angle != -90)
        {
            if (upKey.isDown)
                SWIPE_Y = -1;
            else if (downKey.isDown)
                    SWIPE_Y = 1;
            if (SWIPE_Y == -1)
            {
                carton.x--;
                game.world.rotation -= 0.001;
            }
            else if (SWIPE_Y == 1)
            {
                game.world.rotation += 0.001;
                carton.x++;
            }
            else if (direction == 0)
            {
                game.world.rotation -= 0.001;;
                carton.x--;
            }
            else
            {
                game.world.rotation += 0.001;;
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
            victory("Bravo t’as fait un carton !");
        }
        else if (!this.cartonOnTable()){
            game.world.rotation = 0;
            defeat("En haut, en bas, à droite, à gauche ! Cette soirée là !\nHa non...pardon t’as perdu");
        }
    },

    cartonOnTable : function(){
        if (carton.x <= table.x && (carton.x + carton.width) <= table.x || carton.x > table.x + table.width && (carton.x + carton.width) > table.x + table.width)
            return (0);
        return (1);
    }
}
