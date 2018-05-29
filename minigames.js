
// FBInstant.initializeAsync().then(function() {
//     FBInstant.setLoadingProgress(100);
//     FBInstant.startGameAsync().then(function() {
// initialise Phaser
game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, '', { preload: preload, create: create, update: update });

        // game.state.add('bootstate', bootstate);
        game.state.add('menustate', menustate);
        //game.state.add('runstate', runstate);
        //ajouter les states

game.state.add('winstate', winstate);
game.state.add('losestate', losestate);
game.state.add('gamestate', gamestate);
game.state.add('game2state', game2state);
game.state.add('game3state', game3state);
game.state.add('game4state', game4state);
game.state.add('game5state', game5state);
game.state.add('game6state', game6state);
game.state.add('game8state', game8state);

        game.state.start('menustate');
        //game.state.start('game5state');

        function preload(){

        }

        function create(){

        }

        function update(){

}

// })
// })
