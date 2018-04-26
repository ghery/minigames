var menustate = {
  preload: function() {
    game.load.image('Cochon', 'assets/Cochon.png');
    game.load.image('Lapin', 'assets/Lapin.png');
    game.load.image('Perroquet', 'assets/Perroquet.png');
    game.load.image('Jouer', 'assets/Bouton_jouer.png');
    game.load.image('Title', 'assets/Titraille_cafouillages.png');
  },
  create: function () {
    game.stage.backgroundColor = "#d9c88b";

    Title = game.add.image(0, 0, 'Title');
    Title.x = (WIDTH / 2 - Title.width / 2);
    Title.y = Title.height / 3;
    //Title.scale.setTo(1, 1);
    Cochon = game.add.image(450, 290, 'Cochon');
    Cochon.scale.setTo(0.125, 0.125);
    Lapin = game.add.image(250, 210, 'Lapin');
    Lapin.scale.setTo(0.25, 0.25);
    Perroquet = game.add.image(450, 210, 'Perroquet');
    Perroquet.scale.setTo(0.25, 0.25);
    Jouer = game.add.button(0, 550, 'Jouer', actionOnClick, this, 2, 1, 0);
    Jouer.scale.setTo(0.6, 0.6);
    Jouer.x = WIDTH / 2 - Jouer.width / 2;
    LIFE = 3;
    SCORE = 0;
  },

  update: function () {

  }

};

function actionOnClick () {
  levelSelector();
}
