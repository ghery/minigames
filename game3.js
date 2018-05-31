var g3_move_y = -1;
var g3_b = false;

var obstacle;
var b_up = false;
var b_down = false;

var game3state = {
    preload: function() {
      //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      game.load.image('cochonours', 'assets/Cochonours_vector.png');
      game.load.image('obstacle', 'assets/koala.png');
      //preload_font();
    },

    create: function() {
        cursors = game.input.keyboard.createCursorKeys();
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // CHARACTER

        character =  game.add.sprite(0, 0, 'cochonours');
        game.physics.enable(character);
        character.body.collideWorldBounds = true;
        character.scale.setTo(0.10, 0.10)
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
                tmp = character.y + obstacle.height;
                if (tmp + character.height < HEIGHT)
                    character.y = tmp;
            }
            else if (g3_move_y > game.input.y)
            {
                character.y -= obstacle.height;
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
        obstacle.scale.setTo(0.3, 0.3);
        obstacle.y = Math.floor(Math.random() * parseInt(HEIGHT / obstacle.height)) * obstacle.height;
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
        victory("Bravo tu as évité les obstacles !");
    },
    defeat: function(){
        defeat("BADABOUMBOUMBOUM !");
    }
};
