<?php
    $DB_DSN = "mysql:dbname=cafouillages;host=localhost;charset=utf8";
    $DB_USER = "cafouillages";
    $DB_PASSWORD = "XursDhSDH3KIBS52";
    try{
        $pdo = new PDO($DB_DSN, $DB_USER, $DB_PASSWORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e){
        echo ("Connection bdd erreur : ".$e->getMessage());
    }
?>
