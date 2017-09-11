<?php

// La fonction permettant la miniaturisation etant particulierement
// gourmande en ressources, on cree un fichier separe pour la miniature
// pas de Header donc


$source = imagecreatefrompng("images/exemple_png_avion.png");
$destination = imagecreatetruecolor(200, 150); // Creation de la miniature vide

// Renvoie des dimensions de l'image d'origine
$largeur_source = imagesx($source);
$hauteur_source = imagesy($source);
$largeur_destination = imagesx($destination);
$hauteur_destination = imagesy($destination);

// Creation de la miniature
imagecopyresampled($destination, $source, 0, 0, 0, 0, $largeur_destination, $hauteur_destination, $largeur_source, $hauteur_source);

// Enregistrement de la miniature au format jpeg
imagejpeg($destination, "images/mini_exemple_avion.jpg");

?>