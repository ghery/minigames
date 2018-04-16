function levelSelector(){
  var random = game.rnd.integer() % LEVELNB;

  // while(random == LASTLEVEL){
  //   var random = game.rnd.integer() % LEVELNB;
  // }

  if( random == 0)
  {
    LASTLEVEL = 0;
    game.state.start('gamestate');
  }
}
