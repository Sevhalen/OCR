/* 
 * Fichier JS du cours 5 sur JS
 */

function clic() {
    console.log("Clic !");
};

var EltBouton = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
EltBouton.addEventListener("click", clic);

/*
 * Fonctionne aussi sous la forme d'une fonction anonyme :
 * EltBouton.addEventListener("click", function () {
 *  console.log("clic");
 * });
 */


// Suppression du gestionnaire pour l'événement click
EltBouton.removeEventListener("click", clic);

// Ajout d'un gestionnaire qui affiche le type et la cible de l'événement
document.getElementById("bouton").addEventListener("click", function (e) {
   console.log("Evènement : " + e.type + ", texte de la cible : " +
           e.target.textContent); 
});

// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", function (e) {
    console.log("Vous avez appuyé sur la touche dont le code est " + e.charCode +
            " correspondant à la touche " + String.fromCharCode(e.charCode));
});

// Exemple d'affichage de la touche appuyée et relachée
function infosClavier(e) {
    console.log("Evènement clavier : " + e.type + ", touche : " + e.keyCode);
};

document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);