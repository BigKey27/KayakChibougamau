"use strict";

init_presentation();
setAltLanguage();
var changement = setInterval ('affichefiche("suivante");',5000);


// fonction qui détermine au hasard quelle fiche sera affichée par défaut lors de l ouverture de la page principale

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

// Fonction masquant les fiches dans le caroussel (la fiche par défaut est choisie au hasard)

function init_presentation() {
 
  var fiche =["fiche1", "fiche2", "fiche3", "fiche4", "fiche5", "fiche6", "fiche7"];
  var x;
  var fiche_defaut = getRandomIntInclusive(1,7);
  for (x=1; x<8; x++) {
     if (x != parseInt(fiche_defaut)) {
        document.getElementById(fiche[x-1]).style.display = "none"; 
      }
      else {
        document.getElementById("ficheactive").innerHTML = x;
       let ch="tab".concat(x);
       document.getElementById(ch).style.backgroundColor="gray";
      }
   } 
   document.getElementById("caroussel").display="block"; 
  
   var tab = ['#tab1', '#tab2', '#tab3', '#tab4', '#tab5', '#tab6', '#tab7'];
 
   tab.forEach(function(item, index,array) { 
    document.querySelectorAll(tab[index]).forEach(item => {
      item.addEventListener('click', event => {
        clearInterval(changement);
        changement = setInterval ('affichefiche("suivante");',5000);
      affichefiche(fiche[index]);
     })
    })
   }
   )
  
    var y = document.getElementsByClassName("prev");
    var i;
    for (i = 0; i < y.length; i++) {
      y[i].addEventListener('click', event => {
        clearInterval(changement);
        changement = setInterval ('affichefiche("suivante");',5000);
        affichefiche('prec');
      })
    }

    y = document.getElementsByClassName("next");
    
    for (i = 0; i < y.length; i++) {
      y[i].addEventListener('click', event => {
        clearInterval(changement);
        changement = setInterval ('affichefiche("suivante");',5000);
        affichefiche('suivante');
      })
    }
  }


// Fonction permettant au menu d'aller directement a une fiche sans passer par le carroussel
// sert egalement a l affichage de la fiche suivante et précédente

function affichefiche(nom_fiche) {

let  fiche =["fiche1", "fiche2", "fiche3", "fiche4", "fiche5", "fiche6", "fiche7"];
let nofiche=0;

if (nom_fiche != "prec" && nom_fiche != "suivante") {
  let chaine = nom_fiche.substring(nom_fiche.length-1,nom_fiche.length);
  nofiche = parseInt(chaine);
  let ch="tab".concat(nofiche);
  document.getElementById(ch).backgroundColor="gray";
}
else {
let chaine = document.getElementById('ficheactive').innerText;
chaine = chaine.trim();
nofiche = parseInt(chaine);


if (nom_fiche === "prec") {
  if (nofiche === 1) {
    nofiche=7;
  } 
  else {
    nofiche--;
  }
 }

if (nom_fiche === "suivante") {
  if (nofiche === 7) {
    nofiche=1;
  } 
  else {
    nofiche++;
  }
 }
}

var tab = ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6', 'tab7'];
for (let j = 0; j < 7; j++) {
    document.getElementById(fiche[j]).style.display = "none";
    document.getElementById(tab[j]).style.backgroundColor="black";
}

document.getElementById(fiche[nofiche-1]).style.display = "block";
document.getElementById('ficheactive').innerHTML = nofiche;
let ch="tab".concat(nofiche);
document.getElementById(ch).style.backgroundColor="gray";

}
 
function setAltLanguage() {
  var pagesDictionary = { "page-principale": {fr: "../fr/index.html", en: "../en/index.html"},
                          "presentation": {fr: "../fr/presentation.html", en: "../en/presentation.html"},
                          "suggerer-lieu": {fr: "../fr/suggerer-lieu.html", en: "../en/suggest-location.html"}
  };

  var element = document.getElementById('alt-linguistique');
  var target = element.dataset.locationId;
  var language = document.querySelector("html").lang;
  var altlanguage = (language==='fr')?'en':'fr';
  element.href = pagesDictionary[target][altlanguage];  // détermine le code a insérer selon la page
}

