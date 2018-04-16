

// initialise Phaser
var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, '', { preload: preload, create: create, update: update });

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
game.state.add('menustate', menustate);
//ajouter les states

game.state.start('menustate');


function preload() {
  game.load.image('cat', 'assets/cat_head.png');
}

var cat;
var speed = -10;
var timer;

function create() {
 game.physics.startSystem(Phaser.Physics.ARCADE);
 //create all button use
 cat =  game.add.sprite(300, 350, 'cat');
 cat.scale.setTo(0.5, 0.5)
 game.physics.enable(cat);
 //cat.body.collideWorldBounds = true;
 cat.body.acceleration.x = speed;
 cat.body.maxVelocity.x = 40;
 timer = game.time.create(false);
 timer.start(); // quand timer fini, use destroy
 game.input.addPointer();
 game.input.onUp.add(function ()
 {
     cat.x += 30;
 }, this);
}

function update() {
    console.log(timer.seconds);
    console.log(cat.width);
    victory();
}
