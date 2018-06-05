<?php

include ("connect.php");

//echo $_POST['nom'];
//echo $_POST['score'];
if (isset($_POST['nom']) && isset($_POST['score']))
{
    $sql = "SELECT `id`, `nom`, `score` FROM `leaderBoard` WHERE nom=?"; // offset 50 (decalage)
    $sth = $pdo->prepare($sql);
    $sth->execute(array($_POST['nom']));
    $req = $sth->fetchAll();
    if ($req)
    {
        $sql = "SELECT `id`, `nom`, `score` FROM `leaderBoard` WHERE nom=? and score < ?"; // offset 50 (decalage)
        $sth = $pdo->prepare($sql);
        $sth->execute(array($_POST['nom'], $_POST['score']));
        $req = $sth->fetchAll();
        if ($req)
        {
            $sql = "UPDATE `leaderBoard` SET `score`=? WHERE nom=?"; // offset 50 (decalage)
            $sth = $pdo->prepare($sql);
            $sth->execute(array($_POST['score'], $_POST['nom']));
            echo "OK";
        }
        else {
            echo "False";
        }
    }
    else
    {
        $sql = "INSERT INTO `leaderBoard`(`nom`, `score`) VALUES (?,?)"; // offset 50 (decalage)
        $sth = $pdo->prepare($sql);
        $sth->execute(array($_POST['nom'], $_POST['score']));
    }
}

?>
