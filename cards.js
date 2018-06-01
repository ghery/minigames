var cardstate = {

    preload: function() {
      //preload_font();
    },

    create: function() {
      var i = 0;
      var maxColumn = 5;
      var column = 0;
      var nb = 10;
      var maxRow = 2;
      var row = 0;

      while (i < nb /*&& i < 12*/)
      {
          card = game.add.image(0, 0, 'card');
          card.scale.setTo(0.5, 0.5);
          card.x = 40 + WIDTH / 2 - ((card.width + 40) * maxColumn / 2) + (card.width + 40) * column;
          card.y = (40 + HEIGHT / 2 - (card.height + 40) * maxRow / 2) + (card.height + 40) * row;
          if (i == 0)
          {
              text = game.add.text(0, 0, "Cartes : 0 / 10");
              text.x = WIDTH / 2 - text.width / 2;
              text.y = card.y - 80 - text.height;
              text.addColor("#fff", 0);
              text.fontSize = 40;
              text.align = "center";
          }
          if ((column + 1) % maxColumn == 0) // attention au + 1
              row++;
          console.log(row);
          i++;
          column++;
          if (column >= maxColumn)
            column = 0;
      }
      // ajouter des fleches gauches droite si jamais plus de cartes existante
    },

    update: function() {
    },
};
