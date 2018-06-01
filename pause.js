function Pause(i) {
  if (i == 1) {
    //bouton pause
    pauseButton.destroy();

    // variable de la pause
    pauseVar = 1;

    //passage du jeu en pause
    game.paused = true;

    //passage du jeu en grisé
    black = game.add.sprite(0, 0, 'black');
    black.alpha = 0.8;

    //asset ajouter pendant la pause
    enPause = game.add.sprite(0, 0, 'enPause');
    enPause.x = WIDTH / 2 - enPause.width / 2;
    enPause.y = HEIGHT / 4;

    //PLAY
    playButton = game.add.image(0, 0, 'play');
    playButton.scale.setTo(0.12, 0.12);
    playButton.x = (WIDTH - playButton.width) - 5;
    playButton.y = 5;
  }
  else if (i == 0) {
    // DESTROY
    playButton.destroy();
    enPause.destroy();
    black.destroy();

    // CREATE
    pauseButton = game.add.image(0, 0, 'pause');
    pauseButton.scale.setTo(0.10, 0.10);
    pauseButton.x = (WIDTH - pauseButton.width);
    pauseButton.y = 0;

    // VARS
    game.paused = false;
    pauseVar = 0;

  }
}
