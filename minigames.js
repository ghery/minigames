var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// initialise Phaser
var game = new Phaser.Game(config);

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
  this.load.image('cat', 'assets/cat_head.png');
}

function create() {
 //create all button use
 cat =  this.add.image(100, 400, 'cat').setScale(0.5);
}


function update() {

}
