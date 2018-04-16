var menustate = {
  preload: function() {
    game.load.image('Cochon', 'assets/Cochon.png');
    game.load.image('Lapin', 'assets/Lapin.png');
    game.load.image('Perroquet', 'assets/Perroquet.png');
  },
  create: function () {
    Cochon = game.add.image(450, 250, 'Cochon');
    Cochon.scale.setTo(0.125, 0.125);
    Lapin = game.add.image(250, 170, 'Lapin');
    Lapin.scale.setTo(0.25, 0.25);
    Perroquet = game.add.image(450, 170, 'Perroquet');
    Perroquet.scale.setTo(0.25, 0.25);
    Jouer = game.add.button(game.world.centerX - 95, 400, 'jouer', actionOnClick, this, 2, 1, 0);

    Jouer.onInputOver.add(over, this);
    Jouer.onInputOut.add(out, this);
    Jouer.onInputUp.add(up, this);
  },

  update: function () {

  }

};
