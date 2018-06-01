
var arrayLastLevel = [];

function initArrayLastLevel()
{
    var i = 0;

    while (i < LEVELNB)
    {
        if (i == 2)
            arrayLastLevel[i] = 3;
        else if (i == 6)
            arrayLastLevel[i] = 7;
        else
            arrayLastLevel[i] = 0;
        i++;
    }
    console.log(arrayLastLevel);
}
initArrayLastLevel();


function isInArrayLastLevel(nb)
{
    var i = 0;

    while (i < LEVELNB)
    {
        if (arrayLastLevel[i] == nb)
            return 0;
        i++;
    }
    return 1;
}

function isFullArrayLastLevel(){
    var i = 0;

    while (i < LEVELNB)
    {
        if (arrayLastLevel[i] == 0)
            return 0;
        i++;
    }
    return 1;
}

function levelSelector(){
  var random = game.rnd.integer() % LEVELNB + 1;

  while(!isInArrayLastLevel(random) || random == LASTLEVEL || random == LASTLASTLEVEL){//random == LASTLEVEL || random == LASTLASTLEVEL){
    if (isFullArrayLastLevel())
        initArrayLastLevel();
    var random = game.rnd.integer() % LEVELNB + 1;
    console.log(random);
    console.log(arrayLastLevel);
  }

  if( random == 1)
  {
    LASTLASTLEVEL = LASTLEVEL;
    LASTLEVEL = 1;
    arrayLastLevel[0] = 1;
    game.state.start('gamestate');
  }
  else if( random == 2)
  {
    LASTLASTLEVEL = LASTLEVEL;
    LASTLEVEL = 2;
    arrayLastLevel[1] = 2;
    game.state.start('game2state');
}
  /*else if( random == 3)
  {
   LASTLASTLEVEL = LASTLEVEL;
     LASTLEVEL = 3;
      arrayLastLevel[2] = 3;
     game.state.start('game3state');
 }*/
  else if( random == 4)
  {
    LASTLASTLEVEL = LASTLEVEL;
    LASTLEVEL = 4;
    arrayLastLevel[3] = 4;
    game.state.start('game4state');
  }
  else if( random == 5)
  {
    LASTLASTLEVEL = LASTLEVEL;
    LASTLEVEL = 5;
    arrayLastLevel[4] = 5;
    game.state.start('game5state');
  }
  else if( random == 6)
  {
    LASTLASTLEVEL = LASTLEVEL;
    LASTLEVEL = 6;
    arrayLastLevel[5] = 6;
    game.state.start('game6state');
  }
  // else if( random == 7)
  // {
  // LASTLASTLEVEL = LASTLEVEL;
  //   LASTLEVEL = 7;
  //   arrayLastLevel[6] = 7;
  //   game.state.start('game7state');
  // }
  else if( random == 8)
  {
    LASTLASTLEVEL = LASTLEVEL;
    LASTLEVEL = 8;
    arrayLastLevel[7] = 8;
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
