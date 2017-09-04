<?php

$db_login = 'root';
$db_pw    = 'root';
$new_m_pseudo = htmlspecialchars($_POST['pseudo']);
$new_message = htmlspecialchars($_POST['message']);

try
{
    // Connexion a la bdd
    $bdd = new PDO('mysql:host=localhost;dbname=OCR_test;charset=utf8', $db_login, $db_pw);
} catch (Exception $ex)
{
    // En cas d'erreur, affichage d'un message et arret de l'application
    die('Erreur : ' . $ex->getMessage());
}

// Ajout d'un message supplementaire dans la BdD
if(isset($_POST['pseudo']) && isset($_POST['message']))
{
    $req = $bdd->prepare('INSERT INTO minichat(pseudo, message) VALUES(?, ?)');
    $req->execute(array($new_m_pseudo, $new_message));
}

// Retour automatique a la page principale du minichat
header('location: TP_minichat.php');
?>