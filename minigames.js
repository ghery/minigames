// initialise Phaser
var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, '', { preload: preload, create: create, update: update });


// game.state.add('bootstate', bootstate);
//game.state.add('menustate', menustate);

game.state.add('winstate', winstate);
game.state.add('losestate', losestate);
game.state.add('gamestate', gamestate);
//ajouter les states
game.state.start('gamestate');

function preload(){

}

function create(){

}

function update(){

}
