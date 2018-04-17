/*
function characterInScreenX(charac)
{
    if (charac.x > 0 && charac.x < WIDTH && (charac.x + charac.width) > 0 && (charac.x + charac.width) < WIDTH)
        return (1);
    return (0);
}*/

function victory()
{
    if (character.x < 0 && character.x + character.height < 0)
        defeat();
    else if (timer.seconds >= TIME_LIMIT && character.x > 0)
    {
        win_message = "Bravo, tu es arrivé à l'heure";
        //game.state.destroy("gamestate");
        game.state.start('winstate');
    }
}

function defeat()
{
    lose_message = "Oups, tu n'as pas couru assez vite !\nTu as raté ton rendez-vous CAF !";
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
