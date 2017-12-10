/* 
Fichier JS Exercice cours 4 sur les couleurs
 */

var couleurTexte = prompt("Entrez la couleur du texte (en english bitte) :");
var couleurFond  = prompt("Entrez la couleur du fond (toujours en english gracias : ");

var EltsDiv = document.getElementsByTagName("div");
for(var i = 0; i < EltsDiv.length; i++) {
    EltsDiv[i].style.color = couleurTexte;
    EltsDiv[i].style.backgroundColor = couleurFond;
};