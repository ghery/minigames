

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
game.state.add('menustate', menustate);
//ajouter les states

game.state.start('menustate');


function preload() {
  game.load.image('cat', 'assets/cat_head.png');
}

var cat;
var speed = -50;

function create() {
 game.physics.startSystem(Phaser.Physics.ARCADE);
 //create all button use
 cat =  game.add.sprite(300, 350, 'cat');
 cat.scale.setTo(0.5, 0.5)
 game.physics.enable(cat);
 cat.body.collideWorldBounds = true;
 //cat.velocity = new Phaser.Point(10,0);
 //cat.speed = 10;
 //cat.body.angle = Math.PI / 2;
 //cat.angle = 90;
 cat.body.acceleration.x = speed;
 cat.body.maxVelocity.x = 160;
 //cat.body.maxAcceleration.set(10);
 //cat.body.moveTo(100, 10, Phaser.ANGLE_LEFT);
 //timer = game.time.create(false);
 //timer.start();

 game.input.addPointer();
 /*game.time.events.repeat(Phaser.Timer.SECOND * 1, -1, function ()
 {
     cat.x -= 10
 }, this);*/
 game.input.onUp.add(function ()
 {
     //cat.body.acceleration.x = 20;
     cat.x += 30;
     console.log("test");
 }, this);
}

function update() {

}
