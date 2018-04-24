function levelSelector(){
  var random = game.rnd.integer() % LEVELNB;

  // while(random == LASTLEVEL){
  //   var random = game.rnd.integer() % LEVELNB;
  // }

  console.log(random);
  if( random == 0)
  {
    LASTLEVEL = 0;
    game.state.start('gamestate');
  }
  if( random == 1)
  {
    LASTLEVEL = 1;
    game.state.start('game2state');
  }
}
