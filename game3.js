var g3_move_y = -1;
var g3_b = false;

var game3state = {

    preload: function() {
      game.load.image('cochonours', 'assets/Cochonours_vector.png');
      game.load.image('obstacle', 'assets/koala.png');
      //preload_font();
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // CHARACTER

        character =  game.add.sprite(0, 0, 'cochonours');
        game.physics.enable(character);
        character.body.collideWorldBounds = true;
        character.scale.setTo(0.10, 0.10)
        character.body.onCollide = new Phaser.Signal();
        character.body.onCollide.add(function(){
            this.defeat();
        }, this);

        // OBSTACLE

        groupObstacle = game.add.group();
        game.time.events.repeat(Phaser.Timer.SECOND * 2, 8, function (){
            this.create_obstacle();
        }, this);

        game.input.addPointer();
        game.input.onUp.add(function ()
        {
            g3_b = false;
        }, this);
        game.input.onDown.add(function ()
        {
            g3_b = true;
        }, this);
    },
    create_obstacle: function(){
        obstacle = groupObstacle.create(WIDTH, 0, 'obstacle');
        obstacle.scale.setTo(0.3, 0.3);
        obstacle.y = Math.floor(Math.random() * (HEIGHT / obstacle.height)) * obstacle.height;
        game.physics.enable(obstacle);
        obstacle.checkCollision = true;
        obstacle.body.immovable = true;
        obstacle.body.acceleration.x = -80;
    }
    ,

    update: function() {
        if (g3_b)
        {
            if (g3_move_y < 0)
                g3_move_y = game.input.y;
            else if (g3_move_y < game.input.y)
                character.body.acceleration.y = 100;
            else if (g3_move_y > game.input.y)
                character.body.acceleration.y = -100;
        }
        else if (!g3_b)
        {
            g3_move_y = -1;
        }
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
