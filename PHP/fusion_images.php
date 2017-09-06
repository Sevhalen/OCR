<?php

// On cree un JPEG
header("Content-type: image/png");

// Chargement des images
$image_fond = imagecreatefrompng("images/android_png.png");
$image_logo = imagecreatefrompng("images/exemple_png.png");

// Renvoi des dimensions des images
$largeur_fond = imagesx($image_fond);
$hauteur_fond = imagesy($image_fond);
$largeur_logo = imagesx($image_logo);
$hauteur_logo = imagesy($image_logo);

// On veut placer le logo en bas a droite
// Calcul des coordonnees ou on doit placer le coin superieur gauche du logo
// par rapport au coin superieur gauche de l'image de fond
$position_logo_x = $largeur_fond - ($largeur_logo/2);
$position_logo_y = $hauteur_fond - ($hauteur_logo/2);

// On positionne le logo sur l'image
imagecopymerge($image_fond, $image_logo, $position_logo_x, $position_logo_y, 0, 0, ($largeur_logo/2), ($hauteur_logo/2), 60);

// Affichage de l'image de fond fusionnee avec le logo
imagepng($image_fond);

