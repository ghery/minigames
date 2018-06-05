<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Cafouillages</title>
	<link rel="apple-touch-icon" href="/cochonours_vector.png">
	<meta name="apple-mobile-web-app-title" content="AppTitle">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=screen-width">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
  <!-- <script src="//cdn.jsdelivr.net/npm/phaser@3.4.0/dist/phaser.js"></script> -->
	<script type="text/javascript" src="phaser.min.js"></script>
	<link rel="stylesheet" href="style.css"/>
</head>

<script type="text/javascript" src="var.js"></script>
<script src="jquery-3.3.1.min.js"></script>

<?php
include ("leaderboard/connect.php");
    if ($_GET['nav'] == "leaderboard")
        include("leaderboard/index2.php");
    else if ($_GET['nav'] == "name")
        include("leaderboard/name.php");
    else
        include("index.html");
?>
</html>
