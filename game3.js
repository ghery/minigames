var g3_move_y = -1;
var g3_b = false;

var obstacle;
var b_up = false;
var b_down = false;

var game3state = {
    i_obstacle : 0,
    preload: function() {
      //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      //preload_font();
    },

    create: function() {
      pauseVar = 0;

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
        if (pauseVar == 0){

        i_obstacle = 1;
        groupObstacle = game.add.group();
        this.create_obstacle();
        game.time.events.repeat(Phaser.Timer.SECOND * 1, 15, this.create_obstacle, game);

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

      }

      // INSTRUCTIONS

      instructions3 = game.add.image(0, 0, 'instructions3');
      instructions3.x = WIDTH / 2 - instructions3.width / 2;
      instructions3.y =HEIGHT / 8;

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

      launchgame3();
    },
    create_obstacle: function(){
        if (i_obstacle > 3)
            i_obstacle = 1;
        tmp = 'g3_obstacle'+i_obstacle;
        obstacle = groupObstacle.create(WIDTH + 200, 0, tmp);
        i_obstacle++;
        //obstacle.scale.setTo(0.3, 0.3);
        obstacle.y = Math.floor(Math.random() * parseInt(HEIGHT / character.height)) * character.height;
        game.physics.enable(obstacle);
        obstacle.checkCollision = true;
        obstacle.body.immovable = true;
        obstacle.body.acceleration.x = -100;
    }
    ,
    update: function() {
        route.tilePosition.x -= 2;
        game.physics.arcade.collide(character, groupObstacle);
        if (groupObstacle.right < 0)
            this.victory();
    },
    victory: function(){
        victory("Super tu peux aller te baigner !", 3);
    },
    defeat: function(){
        defeat("Bon… à l’année prochaine ?");
    }
};

function launchgame3() {
  pauseVar = 1;
  //black tween
  black = game.add.image(0, 0, 'black');
  black.alpha = 1;
  tween = game.add.tween(black).to( { alpha: 0 }, 5000, "Linear", true);
  tween.onComplete.add(function(){
    pauseVar = 0;
  }, this);
}
