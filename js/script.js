

/* ***********************************************
Milestone 1
Partendo dalla seguente struttura dati (allegata sotto) , mostriamo in pagina tutte le icone disponibili
Milestone 2
Coloriamo le icone per tipo
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone

************************************************* */

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];


// Icons container
 const container = document.querySelector(".icons");
 

 // 1. stampare le icone a schermo
 //evocazione funzione 
 printIcons(icons,container);  // print: che cosa, dove 

// 2. stampare icone colorate
const coloredIcons = colorIcons(icons,);  // salvo in una variabile l'array che riporta fuori la funzione








 /**************************************************** 
  * FUNCTIONS
  ****************************************************/ 


   /* 
   STAMPA ICONE A SCHERMO
   */

  function printIcons(icons,container){

    // genero il markup icone: creo variabile di stringa x poi iniettarla nel dom
    let html = "";
    icons.forEach((icon) => {

        // destrutturazione -- per creare più variabili in un una sola volta così da creare interpolazioni più rapide nel template literal
        const {family,prefix,name} = icon;

        html += 
        `<div class="icon">
            <i class="${family} ${prefix}${name}" 
              style="color: #333"></i>
            <div class="title">${name}</div>
         </div>`;

    });

    // aggiunta icone al container
    container.innerHTML = html;

  }
