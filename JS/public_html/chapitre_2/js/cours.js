// Fichier JS du cours 2

// Recuperation des attributs d'une selection
console.log(document.querySelector("a").getAttribute("href"));
console.log(document.querySelector("a").href);

// Recuperation du contenu textuel sans les balises HTML
console.log(document.getElementById("contenu").textContent);

// Recuperation de l'ensemble du contenu HTML d'une selection
console.log(document.getElementById("contenu").innerHTML);


// Selection des éléments selon leur balise
var titreElts = document.getElementsByTagName("h2"); // Recupere tous les titres h2

console.log(titreElts[0]); // Affiche le premier h2 trouvé
console.log(titreElts.length); // Affiche le nombre de h2 trouvé dans le document

// Selection des éléments selon leur classe
var merveillesElts = document.getElementsByClassName("merveilles");
for(var i = 0; i < merveillesElts.length; i++)
{
    console.log(merveillesElts[i]);
}

// Selection des éléments selon leur identifiant
console.log(document.getElementById("nouvelles"));

// Tous les éléments fils de l'élément identifiant "antiques" ayant la classe "existe"
console.log(document.getElementById("antiques").getElementsByClassName("existe").length);

// Utilisation des sélecteurs CSS
// Tous les paragraphes
console.log(document.querySelectorAll("p").length);

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length);

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length);

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe
console.log(document.querySelectorAll("#antiques > .existe").length);

// Renvoie uniquement du premier paragraphe
console.log(document.querySelector("p"));

// Liste des classes de l'élément avec ID "antiques"
var classes = document.getElementById("antiques").classList
console.log(classes.length) // Affiche 1 : l'elément ne possède qu'une seule classe
console.log(classes[0]) // Affiche la classe en question "merveilles"