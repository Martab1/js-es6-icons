

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


// colors
const colors = [ 
    "#c3f0ca",
    "#ff8ba7",
    "#33272a",
];

// Icons container
 const container = document.querySelector(".icons");
 

 // 1. stampare le icone a schermo
 //evocazione funzione 
 printIcons(icons,container);  // print: che cosa, dove 

// 2. stampare icone colorate
const coloredIcons = colorIcons(icons,colors);  // salvo in una variabile l'array che riporta fuori la funzione
// console.log(coloredIcons);
printIcons(coloredIcons,container);

// 3. filtraggio icone
// A. generazione selezione opzioni
const select = document.querySelector("#type");
// riporto i tipi univoci di icone 
const types = getType(coloredIcons);
genOption(types,select); // types (quanti), select (dove inserire)




// B. effettuare il filtraggio al cambio di opzione 











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
        const {family,prefix,name,color} = icon;

        html += 
        `<div class="icon">
            <i class="${family} ${prefix}${name}" 
              style="color: ${color}"></i>
            <div class="title">${name}</div>
         </div>`;

    });

    // aggiunta icone al container
    container.innerHTML = html;

  }



  /* 
   * RETURN ICONE COLORATE PER TIPO
  */

  function colorIcons(icons,colors){
    const types = getType (icons);
    // console.log(types);
    // console.log(colors);

    // assegnare un colore per tipo a ogni icona
    const coloredIcons = icons.map( (icon) =>{
        const idexType = types.indexOf(icon.type);

        return {
            ...icon,
            color:colors[idexType],

        }

    });
     return coloredIcons;
  }


  /* 
  * OTTENERE I TIPI DI ICONE ( SENZA DUPLICATI ) 
  */

  function getType (icons){
    // creo array vuoto 
    const types = [];

    //itero sulle icone
    icons.forEach( (icon) => {
        // se i type dell'icona non è in types
        if(! types.includes(icon.type)){
            // lo inserico
            types.push(icon.type)
        }
    });
 
    // ritorno del valore da utilizzare a linea 170
    return types;
  }




  /* 
  * GENERAZIONE OPZIONI PER FILTRAGGIO
  */

  function genOption(types,select){
      // gen opzioni
      let options = "";
      types.forEach( (type) => {
          options += `<option value="${type}">${type}</option>`

      });

      select.innerHTML += options;

  }