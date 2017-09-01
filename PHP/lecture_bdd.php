<?php

try
{
    // Connexion a la bdd
    $bdd = new PDO('mysql:host=localhost;dbname=OCR_test;charset=utf8', 'root', 'root');
} catch (Exception $ex)
{
    // En cas d'erreur, affichage d'un message et arret de l'application
    die('Erreur : ' . $ex->getMessage());
}

// Si tout se passe bien pour la connexion, poursuite de l'application

// Recuperation de l'ensemble du contenu de la table jeux_video
$reponse = $bdd->query('SELECT * FROM jeux_video');

// Affichage de toutes les entrees une a une
while($donnees = $reponse->fetch())
{
    ?>
    
<p>
    <strong>Jeu : </strong><?= $donnees['nom']; ?><br />
    Le possesseur de ce jeu est : <?= $donnees['possesseur']; ?>, et il le vend
    à <?= $donnees['prix']; ?> euros.<br />
    Ce jeu fonctionne sur <?= $donnees['console']; ?> et on peut y jouer à
    <?= $donnees['nbre_joueurs_max']; ?> au maximum.<br />
    <?= $donnees['possesseur']; ?> a laissé ces commentaires sur <?= $donnees['nom']; ?> : 
    <em><?= $donnees['commentaires']; ?></em>
</p>
<?php
}

$reponse->closeCursor();

?>