function handleIncorrect(){
   if(!game.device.desktop){
      document.getElementById("turn").style.display="flex";
   }
}

function handleCorrect(){
  if(!game.device.desktop){
      if(!firstRunLandscape){
				//gameRatio = window.innerWidth/window.innerHeight;
				game.width = window.innerWidth;
				game.height = window.innerHeight;
                WIDTH = game.width;
                HEIGHT = game.height;
				game.renderer.resize(game.width,game.height);
                console.log("hello");
                //game.scale.startFullScreen(false);
				game.state.start("menustate");
      }

      //game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
      document.getElementById("turn").style.display="none";
      //game.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
      //game.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      //game.game.scale.refresh();
  }
}



var firstRunLandscape = false;


var menustate = {
  preload: function() {
  },

  create: function () {
    game.stage.backgroundColor = "#ccffff";

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //have the game centered horizontally
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    //Title.scale.setTo(1, 1);
    Cochon = game.add.image(0, 0, 'Cochon');
    Cochon.scale.setTo(0.125, 0.125);
    Cochon.x = WIDTH / 2 - Cochon.width / 2;
    Cochon.y = HEIGHT / 2 - Cochon.height / 2;
    Lapin = game.add.image(250, 210, 'Lapin');
    Lapin.scale.setTo(0.25, 0.25);
    //console.log(Cochon.x);
    Lapin.y = Cochon.y - (Lapin.height - Cochon.height);
    Lapin.x = Cochon.x - Lapin.width - Cochon.width / 2;
    Perroquet = game.add.image(450, 210, 'Perroquet');
    Perroquet.scale.setTo(0.25, 0.25);
    Perroquet.y = Cochon.y + (Cochon.height - Perroquet.height);
    Perroquet.x = Cochon.x + Perroquet.width + Cochon.width / 2;

    Title = game.add.image(0, 0, 'Title');
    Title.x = (WIDTH / 2 - Title.width / 2);
    Title.y = Cochon.y - Title.height * 1.5;

    Jouer = game.add.button(0, 550, 'Jouer', actionOnClick, game, 2, 1, 0);
    Jouer.scale.setTo(0.8, 0.8);
    Jouer.x = WIDTH / 2 - Jouer.width / 2;
    Jouer.y = Cochon.y + Cochon.height + Jouer.height / 2;

    /*Jouer = game.add.button(0, 550, 'Jouer', actionOnClick2, game, 2, 1, 0);
    Jouer.scale.setTo(0.4, 0.4);
    Jouer.x = WIDTH / 2 - Jouer.width / 2;
    Jouer.y = Cochon.y + Cochon.height + Jouer.height / 2 + 150;
    */
  },

  update: function () {

  }

};

function actionOnClick () {
    //game.state.start('game3state');
    levelSelector();
}

function actionOnClick2 () {
  game.state.start('cardstate');
}
