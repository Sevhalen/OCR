<?php

// Avec la bilbiotheque GD activee sur le serveur

// header obligatoire pour la generation d'une image sans enregistrement
// sur le disque
header("Content-type: image/png");

$image = imagecreate(200, 50);

// Creation des couleurs, la premiere devenant la couleur de fond de l'image
$orange = imagecolorallocate($image, 255, 128, 0);
$bleu   = imagecolorallocate($image, 0, 0, 200);
$noir   = imagecolorallocate($image, 0, 0, 0);
$blanc  = imagecolorallocate($image, 255, 255, 255);

imagestring($image, 5, 0, 0, "Noob !", $bleu);

// On rend le orange transparent dans l'image
imagecolortransparent($image, $orange);

imagepng($image);

// Sans le header,
// imagepng($image, "images/monimage.png") pour enregistrer l'image dans un dossier