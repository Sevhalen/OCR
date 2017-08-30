<?php
session_start();
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Page informations</title>
    </head>
    <body>
        <p>
            Re-Bonjour !
        </p>
        <p>
            Nous nous souvenons de toi <?= $_SESSION['prenom']; ?><br />
            Tu es de la maison <?= $_SESSION['nom']; ?>
            depuis <?= $_SESSION['age']; ?> ans !
        </p>
        <p>
            <a href="mapage.php">mapage.php</a>
            <a href="monscript.php">monscript.php</a>
            <a href="informations.php">informations.php</a>
        </p>
    </body>
</html>