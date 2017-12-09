// Exercice du cours 3

// liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// Ajout des liens
var EltPara
var EltLink
for(var i = 0; i < 3; i++)
{
    EltPara = document.createElement("p");
    EltLink = document.createElement("a");
    EltLink.href = journaux[i];
    EltLink.textContent = journaux[i];
    EltPara.appendChild(EltLink);
    document.getElementById("contenu").appendChild(EltPara);
};