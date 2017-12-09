// Fichier JS Exercice du cours 3

// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];



// Ajout d'une structure <dl> dans le contenu
document.getElementById("contenu").appendChild(document.createElement("dl"));
document.querySelector("dl").id = "Liste_Definition";
var EltDt;
var EltDd;
var EltStrong;
mots.forEach(function (mot) // fermeture de la parenthèse à la fin de la fonction
{
    EltDt = document.createElement("dt");
    EltStrong = document.createElement("strong");
    EltStrong.textContent = mot.terme;
    EltDt.appendChild(EltStrong);
    EltDd = document.createElement("dd");
    EltDd.textContent = mot.definition;
    
    document.getElementById("Liste_Definition").appendChild(EltDt);
    document.getElementById("Liste_Definition").appendChild(EltDd);
});
