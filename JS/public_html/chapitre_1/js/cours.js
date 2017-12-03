var h = document.head; // La variable h contient l'objet head du DOM
console.log(h);

var b = document.body; // La variable b contient l'objet body du DOM
console.log(b);

console.log(document.body.childNodes[1]);
console.log(b.childNodes[0]); // Les retours à la ligne dans le code HTML comptent
console.log(b.childNodes[1]);

var h1 = document.body.childNodes[1];
console.log(h1.parentNode);

// Test et affichage du type de noeud qu'est document.body
//  grace à la propriete nodeType
//  pour un noeud : ELEMENT_NODE
//  pour un texte : TEXT_NODE
if (document.body.nodeType === document.ELEMENT_NODE)
{
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
}