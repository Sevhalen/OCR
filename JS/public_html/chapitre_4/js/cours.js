// Fichier JS du cours 4

// Modification du style du premier paragraphe
var EltP = document.querySelector("p");
EltP.style.color = "red";
EltP.style.margin = "50px";
EltP.style.fontFamily = "Arial";
EltP.style.backgroundColor = "black";

// Récupération des couleurs de style imposées aux paragraphes
var EltPara = document.getElementsByTagName("p");
console.log(EltPara[0].style.color);
console.log(EltPara[1].style.color);
console.log(EltPara[2].style.color); // Non-récupérable car déclarée dans une feuille de style externe


// Solution pour remédier aux problèmes d'accès aux propriétés modifiées par une feuille de style externe
var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle);
console.log(stylePara.color);