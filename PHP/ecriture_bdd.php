<?php

// Definition des variables du jeu a ajouter
$nom = 'Overwatch';
$possesseur = 'Peter';
$console = 'PC';
$prix = 10;
$nbre_joueurs_max = 1;
$commentaires = 'Jeu videal FPS en ligne';



try
{
    // Connexion a la bdd
    $bdd = new PDO('mysql:host=localhost;dbname=OCR_test;charset=utf8', 'root', 'root');
} catch (Exception $ex)
{
    // En cas d'erreur, affichage d'un message et arret de l'application
    die('Erreur : ' . $ex->getMessage());
}

// Ajout d'une entree dans la table jeux_video par une requete preparee
$req = $bdd->prepare('INSERT INTO jeux_video(nom, possesseur, console, prix, 
        nbre_joueurs_max, commentaires) VALUES(:nom, :possesseur, :console, :prix,
        :nbre_joueurs_max, :commentaires)');
$req->execute(array(
    'nom' => $nom,
    'possesseur' => $possesseur,
    'console' => $console,
    'prix' => $prix,
    'nbre_joueurs_max' => $nbre_joueurs_max,
    'commentaires' => $commentaires
));

echo 'Le jeu a bien été ajouté !';
?>