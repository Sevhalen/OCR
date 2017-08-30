<?php

// Demarrage de la session avant de faire quoi que ce soit
session_start();

// Creation de quelques variables de session
$_SESSION['prenom'] = 'Jon';
$_SESSION['nom'] = 'Targaryen';
$_SESSION['age'] = 38;

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Titre de la page</title>
    </head>
    <body>
        <p>
            Salut <?= $_SESSION['prenom']; ?> ! <br />
            Tu es sur l'accueil du site
        </p>
        <p>
            <a href="mapage.php">mapage.php</a>
            <a href="monscript.php">monscript.php</a>
            <a href="informations.php">informations.php</a>
        </p>
    </body>
</html>