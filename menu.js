var menustate = {
  preload: function() {
    game.load.image('Cochon', 'assets/Cochon.png');
    game.load.image('Lapin', 'assets/Lapin.png');
    game.load.image('Perroquet', 'assets/Perroquet.png');
    game.load.image('Jouer', 'assets/Jouer.png');
  },
  create: function () {
    game.stage.backgroundColor = "#d9c88b";

    Cochon = game.add.image(450, 250, 'Cochon');
    Cochon.scale.setTo(0.125, 0.125);
    Lapin = game.add.image(250, 170, 'Lapin');
    Lapin.scale.setTo(0.25, 0.25);
    Perroquet = game.add.image(450, 170, 'Perroquet');
    Perroquet.scale.setTo(0.25, 0.25);
    Jouer = game.add.button(game.world.centerX - 200, 550, 'Jouer', actionOnClick, this, 2, 1, 0);
  },

  update: function () {

  }

};

function actionOnClick () {

}
