
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