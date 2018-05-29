
function victory(str)
{
    win_message = str;
    game.state.start('winstate');
}

function defeat(str)
{
    lose_message = str;
    game.state.start('losestate');
}

var winstate = {

    preload: function() {
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        game.load.image('Win0', 'assets/Rendez_vous_CAF.png');
        game.load.image('Win1', 'assets/Ecosystème_CAF.png');
        game.load.image('Win2', 'assets/Demenagement.png');
        game.load.image('Win3', 'assets/Demarche.png');
    },

    create: function() {
        text = game.add.text(20, 20, win_message);
        text.font = 'Montserrat';
        text.addColor("#fff", 0);
        text.fontSize = 40;
        text.align = "center";
        text.x = game.world.centerX - text.width / 2; // calcul a faire apres avoir defini la police
        text.y = (game.world.centerY - (game.world.centerY/2)) - text.height / 2;

        SCORE += 100 + (game.rnd.integer() % 122);

        scoreText = game.add.text(0, 0, "Score:" + SCORE);
        scoreText.font = 'Montserrat';
        scoreText.addColor("#fff", 0);
        scoreText.fontSize = 40;

        if(LASTLEVEL == 0){
          card = game.add.image(0, 0, 'Win0');
          card.x = game.world.centerX - card.width/2;
          card.y = game.world.centerY - card.height/4;
        }
        else if (LASTLEVEL == 1) {
          card = game.add.image(0, 0, 'Win1');
          card.x = game.world.centerX - card.width/2;
          card.y = game.world.centerY - card.height/4;
        }
        else if (LASTLEVEL == 2) {
          card = game.add.image(0, 0, 'Win2');
          card.x = game.world.centerX - card.width/2;
          card.y = game.world.centerY - card.height/4;
        }
        else if (LASTLEVEL == 3) {
          card = game.add.image(0, 0, 'Win3');
          card.x = game.world.centerX - card.width/2;
          card.y = game.world.centerY - card.height/4;
        }

        game.input.addPointer();
        game.input.onUp.add(function ()
        {
          levelSelector();
        }, game);
    },

    update: function() {
    }
};

var losestate = {

    preload: function() {
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        game.load.image('coeur', 'assets/coeur.png');
    },

    create: function() {
        LIFE -= 1;
        if (LIFE == 2){
          text = game.add.text(0, 0, lose_message);
          text.font = 'Montserrat';
          text.addColor("#fff", 0);
          text.fontSize = 40;
          text.align = "center";
          text.x = game.world.centerX - text.width / 2; // calcul a faire apres avoir defini la police
          text.y = game.world.centerY - text.height / 2;
          var coeur1 = game.add.image(0, 0, 'coeur');
          coeur1.scale.setTo(0.25, 0.25);
          coeur1.x = game.world.centerX - coeur1.width/2;
          coeur1.y = (game.world.centerY - (game.world.centerY/2)) - coeur1.height/2;

          var coeur2 = game.add.image(0, 0, 'coeur');
          coeur2.scale.setTo(0.25, 0.25);
          coeur2.x = (game.world.centerX - (game.world.centerX/2)) - coeur1.width/2;
          coeur2.y = (game.world.centerY - (game.world.centerY/2)) - coeur1.height/2;

          var coeur3 = game.add.image(0, 0, 'coeur');
          coeur3.scale.setTo(0.25, 0.25);
          coeur3.x = (game.world.centerX + (game.world.centerX/2)) - coeur1.width/2;
          coeur3.y = (game.world.centerY - (game.world.centerY/2)) - coeur1.height/2;
          game.add.tween(coeur3).to({alpha: 0}, 3000, Phaser.Easing.Linear.None, true);

          game.input.addPointer();
          game.input.onUp.add(function ()
          {
            levelSelector();
          }, game);
        }
        else if (LIFE == 1){
          text = game.add.text(0, 0, lose_message);
          text.font = 'Montserrat';
          text.addColor("#fff", 0);
          text.fontSize = 40;
          text.align = "center";
          text.x = game.world.centerX - text.width / 2; // calcul a faire apres avoir defini la police
          text.y = game.world.centerY - text.height / 2;

          var coeur1 = game.add.image(0, 0, 'coeur');
          coeur1.scale.setTo(0.25, 0.25);
          coeur1.x = (game.world.centerX - (game.world.centerX/3)) - coeur1.width/2;
          coeur1.y = (game.world.centerY - (game.world.centerY/2)) - coeur1.height/2;

          var coeur2 = game.add.image(0, 0, 'coeur');
          coeur2.scale.setTo(0.25, 0.25);
          coeur2.x = (game.world.centerX + (game.world.centerX/3)) - coeur1.width/2;
          coeur2.y = (game.world.centerY - (game.world.centerY/2)) - coeur1.height/2;

          game.add.tween(coeur2).to({alpha: 0}, 3000, Phaser.Easing.Linear.None, true);

          game.input.addPointer();
          game.input.onUp.add(function ()
          {
            levelSelector();
          }, game);
        }
        else if(LIFE == 0){
          text = game.add.text(0, 0, "GAME OVER!");
          text.font = 'Montserrat';
          text.addColor("#fff", 0);
          text.fontSize = 40;
          text.align = "center";
          text.x = game.world.centerX - text.width / 2; // calcul a faire apres avoir defini la police
          text.y = game.world.centerY - text.height / 2;

          var coeur1 = game.add.image(0, 0, 'coeur');
          coeur1.scale.setTo(0.25, 0.25);
          coeur1.x = game.world.centerX - coeur1.width/2;
          coeur1.y = (game.world.centerY - (game.world.centerY/2)) - coeur1.height/2;

          game.add.tween(coeur1).to({alpha: 0}, 3000, Phaser.Easing.Linear.None, true);

          game.input.addPointer();
          game.input.onUp.add(function ()
          {
            game.state.start('menustate');
          }, game);
        }
    },

    update: function() {

    }
};
