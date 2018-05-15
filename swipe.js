var SWIPE_X = 0; // 1 right, -1 left
var SWIPE_Y = 0; // 1 up, -1 down

function launch_swipe()
{
    var x = 0;
    var y = 0;

    game.input.addPointer();
    game.input.onUp.add(function ()
    {
        if (Math.abs(game.input.x - x) > Math.abs(game.input.y - y))
        {
            if (game.input.x > x)
                SWIPE_X = 1;
            else if (game.input.x < x)
                SWIPE_X = -1;
        }
        else
        {
            if (game.input.y > y)
                SWIPE_Y = 1;
            else if (game.input.y < y)
                SWIPE_Y = -1;
        }
    }, this);
    game.input.onDown.add(function ()
    {
        x = game.input.x;
        y = game.input.y;
    }, this);
}

function reset_swipe()
{
    SWIPE_X = 0;
    SWIPE_Y = 0;
}
