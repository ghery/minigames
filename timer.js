
//var time_text;
var time_text_style = {
    font : '40px Arial',
    color : "#000"
}

function print_timer(txt)
{
    txt.x = 0;
    txt.y = 0;
    txt.addColor("#000", 0);
    if (timer && timer.seconds)
        txt.setText("Temps restant : "+(TIME_LIMIT - parseInt(timer.seconds)));
}
