
function victory(str)
{
    win_message = str;
    game.state.start('winstate');
}

function defeat(str)
{
    lose_message = str;
    game.state.start('losestate');
}

var winstate = {

    preload: function() {
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    },

    create: function() {
        text = game.add.text(0, 0, win_message);
        text.font = 'Montserrat';
        text.addColor("#fff", 0);
        text.fontSize = 40;
        text.align = "center";
        text.x = game.world.centerX - text.width / 2; // calcul a faire apres avoir defini la police
        text.y = game.world.centerY - text.height / 2;

        game.input.addPointer();
        game.input.onUp.add(function ()
        {
          levelSelector();
        }, this);
    },

    update: function() {

    }
};

var losestate = {

    preload: function() {
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    },

    create: function() {
        text = game.add.text(0, 0, lose_message);
        text.font = 'Montserrat';
        text.addColor("#fff", 0);
        text.fontSize = 40;
        text.align = "center";
        text.x = game.world.centerX - text.width / 2; // calcul a faire apres avoir defini la police
        text.y = game.world.centerY - text.height / 2; 
    },

    update: function() {

    }
};
