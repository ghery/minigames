
//var time_text;
var time_text_style = {
    font : '40px Arial',
    color : "#fff"
}

function print_timer(txt)
{
    txt.x = 0;
    txt.y = 0;
    txt.addColor("#fff", 0);
    txt.setText("Temps restant : "+(TIME_LIMIT - parseInt(timer.seconds)));
}
