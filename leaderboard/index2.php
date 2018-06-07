<?php

$sql = "SELECT nom, score FROM `leaderBoard` ORDER BY score DESC LIMIT 50 OFFSET 0"; // offset 50 (decalage)
$tab = getTab($pdo, $sql);

function getTab($pdo, $sql)
{
    $sth = $pdo->prepare($sql);
    $sth->execute(array());
    $req = $sth->fetchAll();
    return $req;
}

?>

<link rel="stylesheet" href="../style.css" />

<h2 class="LeaderBoard">
    LeaderBoard
</h2>

<!--<button onclick="request()">Click me</button>
-->
<table>
  <tr class="firstLine">
    <th>Position</th>
    <th>Nom</th>
    <th>Score</th>
  </tr>
  <tr id="First">
      <td>
          <?php echo $key + 1; ?>
      </td>
    <td>
        <?php echo $tab[0]['nom']; ?>
    </td>
    <td>
        <?php echo $tab[0]['score']; ?>
    </td>
  </tr>
<?php
    foreach ($tab as $key => $value) {
      if ($key == 0) continue;
        ?>
        <tr>
            <td>
                <?php echo $key + 1; ?>
            </td>
          <td>
              <?php echo $value['nom']; ?>
          </td>
          <td>
              <?php echo $value['score']; ?>
          </td>
        </tr>
        <?
    }
?>
</table>
<script>
/*
function request (){

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "leaderboard/request.php", true);
    console.log("welcome");
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send("nom="+NOM+"&score="+SCORE);
    xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200)
    {
        console.log(this.responseText);
        //window.location.reload();
    //document.getElementById("t").innerHTML = this.responseText;
    }

    }
}

request();
*/
</script>
