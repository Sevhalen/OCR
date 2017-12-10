/* 
 * Fichier JS Exercice du cours 4
 */

var EltDivInfos = document.getElementById("infos");
var EltNewUL = document.createElement("ul");
var EltsBody = document.getElementsByTagName("body");

var styleContenu = getComputedStyle(document.getElementById("contenu"));

// Suppression de la div "infos" pour le compléter et le ré-insérer plus tard
EltsBody[0].removeChild(EltDivInfos);

EltNewUL.innerHTML = "<li>Hauteur : " + styleContenu.height + "</li>";
EltNewUL.innerHTML += "<li>Longueur : " + styleContenu.width + "</li>";

EltDivInfos.appendChild(document.createTextNode("Informations sur l'élément"));
EltDivInfos.appendChild(EltNewUL);

EltsBody[0].insertBefore(EltDivInfos, document.getElementById("contenu"));