

// initialise Phaser
var game = new Phaser.Game(1200, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// var bootstate = {
//   preload: function() {
//     game.load.image('cat', 'assets/cat_head.png');
//   },
//   create: function () {
//     cat =  game.add.image(100, 0, 'cat');
//   },
//
//   update: function () {
//
//   }
//
// };

// game.state.add('bootstate', bootstate);
// //ajouter les state
//
// game.state.start('bootstate');


function preload() {
  game.load.image('cat', 'assets/cat_head.png');
}

function create() {
 //create all button use
 cat =  game.add.image(0, 350, 'cat').scale.setTo(0.5, 0.5);
 game.input.addPointer();
 game.input.onUp.add(function ()
 {
 }, this);
}

function update() {

}
