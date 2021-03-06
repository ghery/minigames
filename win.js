function victory(str, nbGame)
{
  if(timer)
  {
    timer.pause();
  }
  pauseVar = 1;
  //black tween
  black = game.add.image(0, 0, 'black');
  black.alpha = 0;
  tween = game.add.tween(black).to( { alpha: 1 }, 2000, "Linear", true);
  tween.onComplete.add(function(){
    win_message = str;
    if (nbGame - 1 >= 0)
        arrayCardsWin[nbGame - 1] += 1;
    game.state.start('winstate');
  }, this);
}

function defeat(str)
{
  if(timer)
  {
    timer.pause();
  }
  pauseVar = 1;
  //black tween
  black = game.add.image(0, 0, 'black');
  black.alpha = 0;
  tween = game.add.tween(black).to( { alpha: 1 }, 2000, "Linear", true);
  tween.onComplete.add(function(){
    lose_message = str;
    game.state.start('losestate');
  }, this);
}

var winstate = {

    tmp : 0,
    i : 0,

    preload: function() {
    },

    create: function() {
        text = game.add.text(20, 20, win_message);
        text.font = 'Montserrat';
        text.addColor("#000", 0);
        text.fontSize = 40;
        text.align = "center";
        text.x = game.world.centerX - text.width / 2; // calcul a faire apres avoir defini la police
        text.y = (game.world.centerY - (game.world.centerY/2)) - text.height / 2;

        //SCORE += 100 + (game.rnd.integer() % 122);

        i = 0;
        tmp = 100 + (game.rnd.integer() % 122);
        SCORE += 100 + tmp;

        //this.request();

        scoreAdd = game.add.text(0, 0, "+"+tmp);
        scoreAdd.font = 'Montserrat';
        scoreAdd.addColor("#000", 0);
        scoreAdd.fontSize = 30;
        //scoreAdd.x = WIDTH / 2 - scoreAdd.width / 2;
        //scoreAdd.y = HEIGHT / 2 - scoreAdd.height / 2;
        scoreAdd.x = WIDTH / 2 - scoreAdd.width / 2;
        scoreAdd.y = text.y - scoreAdd.height;

        scoreText = game.add.text(0, 0, "Score: " + (SCORE - tmp));
        scoreText.font = 'Montserrat';
        scoreText.addColor("#000", 0);
        scoreText.fontSize = 40;
        //scoreText.x = WIDTH / 2 - scoreText.width / 2;
        //scoreText.y = HEIGHT / 2 - scoreText.height / 2 - scoreAdd.height - 20;
        scoreText.x = WIDTH / 2 - scoreText.width / 2;
        scoreText.y = (scoreAdd.y - scoreText.height) - 20;

        timer = game.time.create(false);
        timer.start();
    },

    update: function() {
        if (i <= tmp)
        {
            scoreAdd.setText("+"+(tmp - i));
            scoreText.setText("Score: "+(SCORE - tmp + i));
            i++;
        }
        if (i == tmp)
        {
            scoreAdd.destroy();
            createCard();
        }

        if (timer.seconds > 8) {
          game.input.addPointer();
          game.input.onUp.add(function ()
          {
            levelSelector();
          }, game);
        }
    },
    request: function (){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "leaderboard/request.php", true);
        console.log("welcome");
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send("nom="+NOM+"&score="+SCORE);
        xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200)
        {
            console.log(this.responseText);
        }
        }
    }
};

function createCard() {
  text.destroy();

  if(LASTLEVEL == 1){
    card = game.add.image(0, 0, 'Carte1');
    card.scale.setTo(0.42, 0.42);
    card.x = game.world.centerX - card.width/2;
    card.y = game.world.centerY - card.height/2.5;
  }
  else if (LASTLEVEL == 2) {
    card = game.add.image(0, 0, 'Carte2');
    card.scale.setTo(0.42, 0.42);
    card.x = game.world.centerX - card.width/2;
    card.y = game.world.centerY - card.height/2.5;
  }
  else if (LASTLEVEL == 3) {
    card = game.add.image(0, 0, 'Carte3');
    card.scale.setTo(0.42, 0.42);
    card.x = game.world.centerX - card.width/2;
    card.y = game.world.centerY - card.height/2.5;
  }
  else if (LASTLEVEL == 4) {
    card = game.add.image(0, 0, 'Carte4');
    card.scale.setTo(0.42, 0.42);
    card.x = game.world.centerX - card.width/2;
    card.y = game.world.centerY - card.height/2.5;
  }
  if(LASTLEVEL == 5){
    card = game.add.image(0, 0, 'Carte5');
    card.scale.setTo(0.42, 0.42);
    card.x = game.world.centerX - card.width/2;
    card.y = game.world.centerY - card.height/2.5;
  }
  else if (LASTLEVEL == 6) {
    card = game.add.image(0, 0, 'Carte6');
    card.scale.setTo(0.42, 0.42);
    card.x = game.world.centerX - card.width/2;
    card.y = game.world.centerY - card.height/2.5;
  }
  else if (LASTLEVEL == 7) {
    card = game.add.image(0, 0, 'Carte7');
    card.scale.setTo(0.42, 0.42);
    card.x = game.world.centerX - card.width/2;
    card.y = game.world.centerY - card.height/2.5;
  }
  else if (LASTLEVEL == 8) {
    card = game.add.image(0, 0, 'Carte8');
    card.scale.setTo(0.42, 0.42);
    card.x = game.world.centerX - card.width/2;
    card.y = game.world.centerY - card.height/2.5;
  }
}

var losestate = {

    preload: function() {
    },

    create: function() {
        LIFE -= 1;
        if (LIFE == 2){
          text = game.add.text(0, 0, lose_message);
          text.font = 'Montserrat';
          text.addColor("#000", 0);
          text.fontSize = 40;
          text.align = "center";
          text.x = game.world.centerX - text.width / 2; // calcul a faire apres avoir defini la police
          text.y = game.world.centerY - text.height / 2;
          var coeur1 = game.add.image(0, 0, 'coeur1');
          coeur1.scale.setTo(0.25, 0.25);
          coeur1.x = game.world.centerX - coeur1.width/2;
          coeur1.y = (game.world.centerY - (game.world.centerY/2)) - coeur1.height/2;

          var coeur2 = game.add.image(0, 0, 'coeur2');
          coeur2.scale.setTo(0.25, 0.25);
          coeur2.x = (game.world.centerX - (game.world.centerX/2)) - coeur1.width/2;
          coeur2.y = (game.world.centerY - (game.world.centerY/2)) - coeur1.height/2;

          var coeur3 = game.add.image(0, 0, 'coeur3');
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
          text.addColor("#000", 0);
          text.fontSize = 40;
          text.align = "center";
          text.x = game.world.centerX - text.width / 2; // calcul a faire apres avoir defini la police
          text.y = game.world.centerY - text.height / 2;

          var coeur1 = game.add.image(0, 0, 'coeur1');
          coeur1.scale.setTo(0.25, 0.25);
          coeur1.x = (game.world.centerX - (game.world.centerX/3)) - coeur1.width/2;
          coeur1.y = (game.world.centerY - (game.world.centerY/2)) - coeur1.height/2;

          var coeur2 = game.add.image(0, 0, 'coeur2');
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
          SCORE = 0;
          text = game.add.text(0, 0, "GAME OVER !");
          text.font = 'Montserrat';
          text.addColor("#000", 0);
          text.fontSize = 40;
          text.align = "center";
          text.x = game.world.centerX - text.width / 2; // calcul a faire apres avoir defini la police
          text.y = game.world.centerY - text.height / 2;

          var coeur1 = game.add.image(0, 0, 'coeur1');
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
