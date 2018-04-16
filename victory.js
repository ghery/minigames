/*
function characterInScreenX(charac)
{
    if (charac.x > 0 && charac.x < WIDTH && (charac.x + charac.width) > 0 && (charac.x + charac.width) < WIDTH)
        return (1);
    return (0);
}*/

function victory()
{
    if (timer.seconds >= TIME_LIMIT)
    {
        if (cat.x > 0)
        {
            console.log("win");
        }
        else {
            defeat();
        }
    }
}

function defeat()
{
    console.log("defeat");
}
