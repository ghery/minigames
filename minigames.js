
// FBInstant.initializeAsync().then(function() {
//     FBInstant.setLoadingProgress(100);
//     FBInstant.startGameAsync().then(function() {
// initialise Phaser
game = new Phaser.Game(WIDTH, HEIGHT, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Song Myung']
    }

};

        // game.state.add('bootstate', bootstate);
        game.state.add('menustate', menustate);
        //game.state.add('runstate', runstate);
        //ajouter les states

game.state.add('winstate', winstate);
game.state.add('losestate', losestate);
game.state.add('cardstate', cardstate);
game.state.add('gamestate', gamestate);
game.state.add('game2state', game2state);
game.state.add('game3state', game3state);
game.state.add('game4state', game4state);
game.state.add('game5state', game5state);
game.state.add('game6state', game6state);
game.state.add('game7state', game7state);
game.state.add('game8state', game8state);


        function preload(){
          //MENU
          firstRunLandscape = game.scale.isGameLandscape;
          game.scale.forceOrientation(true, false);
        	game.scale.enterIncorrectOrientation.add(handleIncorrect);
          game.scale.leaveIncorrectOrientation.add(handleCorrect);
          game.load.image('Cochon', 'assets/Cochon.png');
          game.load.image('Lapin', 'assets/Lapin.png');
          game.load.image('Perroquet', 'assets/Perroquet.png');
          game.load.image('Jouer', 'assets/Bouton_jouer.png');
          game.load.image('Cartes', 'assets/Bouton_cartes.png');
          game.load.image('Menu', 'assets/Bouton_menu.png');
          game.load.image('Title', 'assets/Titraille_cafouillages.png');

          // GAME 1
          game.load.image('cochonours', 'assets/Cochonours_vector.png');
          game.load.image('instructions', 'assets/Instructions1.png');
          game.load.image('ouverture', 'assets/Ouverture1.png');
          game.load.image('route', 'assets/Route_jeu1.png');
          game.load.image('caf', 'assets/CAF.png');

          //GAME 2
          game.load.image('portefeuille', 'assets/portefeuille.png');
          game.load.image('Billet', 'assets/Billets.png');
          game.load.image('instructions2', 'assets/Instructions2.png');
          game.load.image('ouverture2', 'assets/Ouverture2.png');
          game.load.image('salaire', 'assets/salaire.png');

          //GAME 3
          game.load.image('bus', 'assets/bus.png');
          //game.load.image('g3_obstacle', 'assets/g3_obstacle.png');
          game.load.image('g3_obstacle1', 'assets/g3_obstacle.png');
          game.load.image('g3_obstacle2', 'assets/g3_obstacle2.png');
          game.load.image('g3_obstacle3', 'assets/g3_obstacle3.png');
          game.load.image('g3_route', 'assets/g3_route.png');
          game.load.image('instructions3', 'assets/Instructions3.png');
          game.load.image('ouverture3', 'assets/Ouverture3.png');

          //GAME 4
          game.load.image('round', 'assets/round.png');
          game.load.image('centre', 'assets/centre_social.png');
          game.load.image('instructions4', 'assets/Instructions4.png');
          game.load.image('ouverture4', 'assets/Ouverture4.png');

          //GAME 5
          //game.load.image('cochonours', 'assets/Cochonours_vector.png');
          game.load.image('carton', 'assets/carton.png');
          game.load.image('table', 'assets/table.png');
          game.load.image('fond', 'assets/fondCouloir.png');
          game.load.image('instructions5', 'assets/Instructions5.png');
          game.load.image('ouverture5', 'assets/Ouverture5.png');

          //GAME 6
          game.load.image('papier', 'assets/Papier_2.png');
          game.load.image('ecran', 'assets/Ecran.png');
          game.load.image('instructions6', 'assets/Instructions6.png');
          game.load.image('ouverture6', 'assets/Ouverture6.png');

          //GAME 7
          game.load.image('room', 'assets/fondRoom.png');
          game.load.image('bed', 'assets/bed.png');
          game.load.image('closet', 'assets/closet.png');
          game.load.image('desktop', 'assets/desktop.png');
          game.load.image('instructions7', 'assets/Instructions7.png');
          game.load.image('ouverture7', 'assets/Ouverture7.png');

          //GAME 8
          game.load.image('enfant1', 'assets/bebeCochonours.png');
          game.load.image('enfant2', 'assets/bebePerroquet.png');
          game.load.image('enfant3', 'assets/bebeLapin.png');
          game.load.image('instructions8', 'assets/Instructions8.png');
          game.load.image('ouverture8', 'assets/Ouverture8.png');

          //WIN
          game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
          game.load.image('Carte1', 'assets/Carte1.png');
          game.load.image('Carte2', 'assets/Carte2.png');
          game.load.image('Carte3', 'assets/Carte3.png');
          game.load.image('Carte4', 'assets/Carte4.png');
          game.load.image('Carte5', 'assets/Carte5.png');
          game.load.image('Carte6', 'assets/Carte6.png');
          game.load.image('Carte7', 'assets/Carte7.png');
          game.load.image('Carte8', 'assets/Carte8.png');

          //LOOSE
          game.load.image('coeur1', 'assets/coeur.png');
          game.load.image('coeur2', 'assets/coeur2.png');
          game.load.image('coeur3', 'assets/coeur3.png');

          //PAUSE
          game.load.image('pause', 'assets/pause.png');
          game.load.image('play', 'assets/Play.png');
          game.load.image('black', 'assets/black.jpg');
          game.load.image('enPause', 'assets/enPause.png');

          //CARDS
          //game.load.image('card', 'assets/desktop.png');
          game.load.image('blackCarte', 'assets/blackCarte.png');
        }

        function create(){
          game.input.addPointer();
        }

        function update(){
          game.state.start('menustate');
        }


// })
// })
