function levelSelector(){
  var random = game.rnd.integer() % LEVELNB;

  while(random == LASTLEVEL || random == LASTLASTLEVEL){
    var random = game.rnd.integer() % LEVELNB;
  }

  if( random == 1)
  {
    LASTLASTLEVEL = LASTLEVEL;
    LASTLEVEL = 1;
    game.state.start('gamestate');
  }
  else if( random == 2)
  {
    LASTLASTLEVEL = LASTLEVEL;
    LASTLEVEL = 2;
    game.state.start('game2state');
  }
  // if( random == 3)
  // {
  // LASTLASTLEVEL = LASTLEVEL;
  //   LASTLEVEL = 3;
  //   game.state.start('game3state');
  // }
  else if( random == 4)
  {
    LASTLASTLEVEL = LASTLEVEL;
    LASTLEVEL = 4;
    game.state.start('game4state');
  }
  else if( random == 5)
  {
    LASTLASTLEVEL = LASTLEVEL;
    LASTLEVEL = 5;
    game.state.start('game5state');
  }
  else if( random == 6)
  {
    LASTLASTLEVEL = LASTLEVEL;
    LASTLEVEL = 6;
    game.state.start('game6state');
  }
  // else if( random == 7)
  // {
  // LASTLASTLEVEL = LASTLEVEL;
  //   LASTLEVEL = 7;
  //   game.state.start('game7state');
  // }
  else if( random == 8)
  {
    LASTLASTLEVEL = LASTLEVEL;
    LASTLEVEL = 8;
    game.state.start('game8state');
  }
  else {
    console.log("random:" + random);
    levelSelector();
  }
  console.log("random:" + random);
  // game.state.start('game8state');
  // LASTLEVEL = 2;
}
