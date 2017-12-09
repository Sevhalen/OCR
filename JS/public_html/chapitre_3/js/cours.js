// Fichier JS Cours 3

// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += ' de programmation';

// Modification des attributs d'un élément
document.querySelector("h1").setAttribute("id", "titre");
// fonctionnerait aussi pour id, href et value sous la forme :
// document.querySelector("h1").id = "titre";
console.log(document.querySelector("h1").id);

// Modification des classes d'un élément
var EltTitre = document.querySelector("h1"); // Accès à l'élément
EltTitre.classList.remove("debut");
EltTitre.classList.add("titre");
console.log(EltTitre);

// Ajout d'un élément dans le DOM
var EltPython = document.createElement("li"); // Création d'un élément li
EltPython.id = "python";
EltPython.textContent = "Python";
document.getElementById("langages").appendChild(EltPython);

// Autre méthode par l'ajout d'un élément de type Textuel
var EltRuby = document.createElement("li");
EltRuby.id = "ruby";
EltRuby.appendChild(document.createTextNode("Ruby"));
document.getElementById("langages").appendChild(EltRuby);

// Ajout d'un élément avant un autre fils de l'élément parent
var EltPerl = document.createElement("li");
EltPerl.id = "perl";
EltPerl.textContent = "Perl";
document.getElementById("langages").insertBefore(EltPerl,
    document.getElementById("php")); // Insertion de l'élément Perl juste avant l'élément PHP
    

// Ajout d'un élément à une position exacte
document.getElementById("langages").insertAdjacentHTML("afterBegin",
    '<li id="javascript">Javascript</li>');
    
// Remplacement d'un noeud par un autre
var EltBash = document.createElement("li");
EltBash.id = "bash";
EltBash.textContent = "Bash";
document.getElementById("langages").replaceChild(EltBash, document.getElementById("perl"));

// Suppression d'un noeud
document.getElementById("langages").removeChild(document.getElementById('bash'));


// ------------Exercices-------------------------

// Ajout d'un paragraphe avec lien
var EltLien = document.createElement("p");
EltLien.id = "lien";
EltLien.innerHTML = 'En voici une <a id="newlink">liste</a> plus complète.';
document.querySelector("body").insertBefore(EltLien,
    document.querySelector("script"));
    document.getElementById("newlink").href = 'https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation'