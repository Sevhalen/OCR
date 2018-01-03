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

// Affichage d'informations sur un click effectué dans la page du navigateur
//  En particulier : affichage des coordonnées du click et du bouton clické

// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(codeClick) {
    var bouton = "inconnu";
    switch (codeClick) {
        case 0: // 0 est le code du click gauche
            bouton = "gauche";
            break;
        case 1: // 1 est le code du click milieu
            bouton = "milieu";
            break;
        case 2: // 2 est le code du click droit
            bouton = "droit";
            break
    }
    return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) {
    console.log("Evènement souris : " + e.type + ", bouton " +
            getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}
//Ligne ci-dessous mise en commentaire pour éviter les interférences avec
//l'exemple sur la propagation des événements
//document.addEventListener("click", infosSouris);



// Gestion de la fin du chargement de la page web
window.addEventListener("load", function() {
    console.log("Page entièrement chargée");
});

// Demande de confirmation de la fermeture de la page
//  Requière que l'utilisateur interagisse avec la page pour se déclencher à la fermeture
//  sur Chrome le 27.12.17 : a priori n'affiche pas le message souhaité ...
window.addEventListener("beforeunload", function(e) {
    var message = "on est bien ici !";
    e.returnValue = message;
    return message;
});

// Exemple de propagation des événements (ascendant dans le DOM)
//  Gestion du click dans le document
document.addEventListener("click", function () {
    console.log("Gestionnaire document");
});
//  Gestion du click sur le paragraphe
document.getElementById("para").addEventListener("click", function () {
    console.log("Gestionnaire paragraphe");
});
//  Gestion du click sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
    e.stopPropagation(); // Arrêt de la propagation - A priori ne marche pas non plus sur Chrome
});