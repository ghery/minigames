// taille fenetre de phaser
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var TIME_LIMIT = 10; // limite temps des jeux de facon generale
var LEVELNB = 2;
var LASTLEVEL = 0;
var LIFE = 3;
var SCORE = 0;

var character;
var timer;

var lose_message; //message lose state
var win_message; // message win state
// var time_text; // in timer.js temps restant

// var facebook
var facebookProfil = {
  name: "",
  picture: "",
  bestscore: ""
};
