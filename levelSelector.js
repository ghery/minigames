function levelSelector(){
  var random = game.rnd.integer() % LEVELNB;

  // while(random == LASTLEVEL){
  //   var random = game.rnd.integer() % LEVELNB;
  // }

  if( random == 1)
  {
    LASTLEVEL = 1;
    game.state.start('runstate');
  }
}
