var cardstate = {

    preload: function() {
      //game.load.image('blackCarte', 'assets/blackCarte.png');
      /*game.load.image('Carte1', 'assets/Carte1.png');
      game.load.image('Carte2', 'assets/Carte2.png');
      game.load.image('Carte3', 'assets/Carte3.png');
      game.load.image('Carte4', 'assets/Carte4.png');
      game.load.image('Carte5', 'assets/Carte5.png');
      game.load.image('Carte6', 'assets/Carte6.png');
      game.load.image('Carte7', 'assets/Carte7.png');
      game.load.image('Carte8', 'assets/Carte8.png');*/
      //preload_font();
    },

    create: function() {
      var i = 0;
      var maxColumn = 4;
      var column = 0;
      var maxRow = 2;
      var row = 0;

      while (i < LEVELNB)
      {
          //card = game.add.image(0, 0, 'Carte'+(i + 1));
          if (arrayCardsWin[i] > 0)
          {
              var nameCard = 'Carte'+(i + 1);
              card = game.add.image(0, 0, nameCard);
          }
          else
          {
              var nameCard = 'blackCarte';
              card = game.add.image(0, 0, 'blackCarte');
          }
          card.scale.setTo(0.08, 0.08);
          card.x = 40 + WIDTH / 2 - ((card.width + 40) * maxColumn / 2) + (card.width + 40) * column;
          card.y = (40 + HEIGHT / 2 - (card.height + 40) * maxRow / 2) + (card.height + 40) * row;
          if (i == 0)
          {
              text = game.add.text(0, 0, "Cartes : "+this.nbArrayCardsWin()+" / "+LEVELNB);
              text.x = WIDTH / 2 - text.width / 2;
              text.y = card.y - 80 - text.height;
              text.addColor("#000", 0);
              text.fontSize = 40;
              text.align = "center";
          }
          if ((column + 1) % maxColumn == 0) // attention au + 1
              row++;
          //console.log(row);
          i++;
          column++;
          if (column >= maxColumn)
            column = 0;
        card.inputEnabled = true;
        card.events.onInputDown.add(this.zoomCard, {cardName : nameCard});
      }
      Menu = game.add.button(0, 550, 'Menu', this.returnMenu, game, 2, 1, 0);
      Menu.scale.setTo(0.5, 0.5);
      Menu.x = card.x - card.height * (maxColumn / 2) - Menu.width / 2;
      Menu.y = card.y + card.height + Menu.height;
      // ajouter des fleches gauches droite si jamais plus de cartes existante
    },
    returnMenu : function(){
        game.state.start('menustate');
    }
    ,
    update: function() {
    },
    nbArrayCardsWin : function(){
        var i = 0;
        var nbCards = 0;

        while (i < LEVELNB)
        {
            if (arrayCardsWin[i] > 0)
                nbCards++;
            i++;
        }
        return (nbCards);
    },
    zoomCard : function(){
        cardSelected = game.add.image(0, 0, this.cardName);
        cardSelected.scale.setTo(0.42, 0.42);
        cardSelected.x = WIDTH / 2 - cardSelected.width / 2;
        cardSelected.y = HEIGHT / 2 - cardSelected.height / 2;
        cardSelected.inputEnabled = true;
        cardSelected.events.onInputDown.add(function(){ this.cardSelected.destroy()}, {cardSelected : cardSelected});
    }
};
