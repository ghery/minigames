<?php
$_GET['nav'] = "name";
?>
<div id="contain-name" style="display:flex;align-items:center;justify-content:center;min-height: 100%;font-family:helvetica;">
    <div>
        <div style="margin:auto;width:fit-content;">
            Nom :
        </div>
        <div style="margin:auto;width:fit-content;margin-top:10px;margin-bottom:10px;">
            <input id="name" type="name" name="firstname" value="">
        </div>
    <div style="margin:auto;width:fit-content;">
        <button onclick="launchGame()">OK</button>
    </div>
    </div>
</div>

<script>

function launchGame()
{
    var tmp = document.getElementById("name").value;
    if (tmp != "")
    {
        NOM = tmp;
        document.getElementById("contain-name").style.display = "none";
        $("#contain-name").load("index.html");
    }
    console.log(tmp);
}

</script>
