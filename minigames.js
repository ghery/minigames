
// initialise Phaser
var game = new Phaser.Game(1200, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var bootstate = {
  preload: function() {
  },
  create: function () {

  },

  update: function () {

  }

};

game.state.add('bootstate', bootstate);
//ajouter les state

game.state.start('bootstate');


function preload() {

}

function create() {
 //create all button use
}


function update() {
}
