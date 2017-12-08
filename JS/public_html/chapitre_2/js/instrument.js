/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var EltsLinks = document.getElementsByTagName("a");

function possede(id, classe)
{
    var EltInstrument = document.getElementById(id);
    if(EltInstrument !== null) {
        console.log(EltInstrument.classList.contains(classe));
    } else {
        console.error("Aucun élément trouvé avec cet ID");
    }
}

console.log(EltsLinks.length);
console.log(EltsLinks[0].href);
console.log(EltsLinks[EltsLinks.length - 1].href);

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher false