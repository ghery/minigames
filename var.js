// game
var game;

// taille fenetre de phaser
var WIDTH = 1200;
var HEIGHT = 800;

var TIME_LIMIT = 10; // limite temps des jeux de facon generale
var LEVELNB = 8;
var LASTLEVEL = 0;
var LASTLASTLEVEL = 0;
var LIFE;
var SCORE = 0;

var NOM = "Cochonours";

var character;
var timer;

var pauseVar;

var lose_message; //message lose state
var win_message; // message win state
// var time_text; // in timer.js temps restant

var arrayCardsWin = {}; // nombre de fois qu une carte a ete gagner

function initArrayCardsWin()
{
    var i = 0;

    while (i < LEVELNB)
    {
        arrayCardsWin[i] = 0;
        i++;
    }
    //console.log(arrayCardsWin);
}
initArrayCardsWin();

// var facebook
var facebookProfil = {
  name: "",
  picture: "",
  bestscore: ""
};
