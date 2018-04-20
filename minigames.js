// initialise Phaser
var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, '', { preload: preload, create: create, update: update });


// game.state.add('bootstate', bootstate);
game.state.add('menustate', menustate);
//game.state.add('runstate', runstate);
//ajouter les states

game.state.add('winstate', winstate);
game.state.add('losestate', losestate);
game.state.add('gamestate', gamestate);
game.state.add('game2state', game2state);
game.state.add('game3state', game3state);

game.state.start('menustate');

function preload(){

}

function create(){

}

function update(){

}
