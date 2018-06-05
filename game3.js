var g3_move_y = -1;
var g3_b = false;

var obstacle;
var b_up = false;
var b_down = false;

var game3state = {
    preload: function() {
      //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      //preload_font();
    },

    create: function() {
      //PAUSE
      pauseButton = game.add.image(0, 0, 'pause');
      pauseButton.scale.setTo(0.10, 0.10);
      pauseButton.x = (WIDTH - pauseButton.width);
      pauseButton.y = 0;
      game.input.addPointer();
      game.input.onUp.add(function ()
      {
        if (game.input.x > (WIDTH - pauseButton.width) && game.input.y < pauseButton.height && pauseVar == 0) {
          Pause(1);
        }
        else if (game.input.x > (WIDTH - (pauseButton.width + 5)) && game.input.y < (pauseButton.height + 5) && pauseVar == 1) {
         Pause(0);
        }
      }, game);

        cursors = game.input.keyboard.createCursorKeys();
        game.physics.startSystem(Phaser.Physics.ARCADE);

        route = game.add.tileSprite(0, 0, WIDTH, HEIGHT, 'g3_route');

        // CHARACTER

        character =  game.add.sprite(0, 0, 'bus');
        game.physics.enable(character);
        character.body.collideWorldBounds = true;
        //character.scale.setTo(0.10, 0.10)
        character.body.onCollide = new Phaser.Signal();
        character.body.onCollide.add(this.defeat, game);

        // OBSTACLE

        groupObstacle = game.add.group();
        this.create_obstacle();
        game.time.events.repeat(Phaser.Timer.SECOND * 1, 15, this.create_obstacle, game);

        game.input.addPointer();
        game.input.onUp.add(function ()
        {
            var tmp;
            if (g3_move_y < game.input.y)
            {
                tmp = character.y + character.height;
                if (tmp + character.height < HEIGHT)
                    character.y = tmp;
            }
            else if (g3_move_y > game.input.y)
            {
                character.y -= character.height;
            }
            g3_move_y = -1;
            g3_b = false;
        }, game);
        game.input.onDown.add(function ()
        {
            if (g3_move_y < 0)
                g3_move_y = game.input.y;
            g3_b = true;
        }, game);
    },
    create_obstacle: function(){
        obstacle = groupObstacle.create(WIDTH + 200, 0, 'obstacle');
        //obstacle.scale.setTo(0.3, 0.3);
        obstacle.y = Math.floor(Math.random() * parseInt(HEIGHT / character.height)) * character.height;
        game.physics.enable(obstacle);
        obstacle.checkCollision = true;
        obstacle.body.immovable = true;
        obstacle.body.acceleration.x = -100;
    }
    ,
    update: function() {
        game.physics.arcade.collide(character, groupObstacle);
        if (groupObstacle.right < 0)
            this.victory();
    },
    victory: function(){
        victory("Bravo tu as évité les obstacles !", 3);
    },
    defeat: function(){
        defeat("BADABOUMBOUMBOUM !");
    }
};
