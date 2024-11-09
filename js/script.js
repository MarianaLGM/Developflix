
//1. Importa las pelis
/*2. Crear una función que contenga dos parámetros (el genero, contenedor) . 
A esta función le pasarás el género y el contenedor donde tiene que pintar las películas de ese genero.*/
     //Recoge en una variable el contenedor
     //Recoge en una variable cada genero de la película
     //Dentro de la misma función, utiliza un bucle para recorrer cada película y mostrarla:
          //div.Tienes que crear un elemento y añadirle una clase 
          //titulo. Tienes que crear un elemento, añadirle una clase y también añadir texto 
          //poster.Tienes que crear un elemento para la imagen, añadirle una clase, el src y el alt
//3.Añade al div que has creado: el poster, el título
//4. Añade al contenedor. El div creado al que has añadido el poster y el título
/*5. Llama a la función que acabas de crear para mostrar las peliculas por genero. 
En esta función usarás como argumentos (el genero que quieres filtrar, el contenedor donde lo va a mostrar)*/


//Importar pelis
import peliculas from './peliculas.js'
//console.log(peliculas);

//Crear una función que contenga dos parámetros (el genero, contenedor)

function peliculasPorGenero (genero, contenedor){

//Recoger en una variable el contenedor y en otra variable cada genero de la película:

    const divPelisAccion=document.getElementById("genero-28");//contenedor
    const generoIdAccion=peliculas.filter(pelicula=>pelicula.genre_ids.includes(28));//Genero 
    //console.log(divPelisAccion)
    //console.log("pelisAccion", generoIdAccion)

    const divPelisThriller=document.getElementById("genero-53");//contenedor
    const generoIdThriller=peliculas.filter(pelicula=>pelicula.genre_ids.includes(53));//Genero
    //console.log(divPelisThriller)
    //console.log("pelisThriller", generoIdThriller)

    const divPelisAventura=document.getElementById("genero-12");//contenedor
    const generoIdAventura= peliculas.filter(pelicula=>pelicula.genre_ids.includes(12));//Genero
    //console.log(divPelisAventura)
    //console.log("pelisAventura", generoIdAventura)

    //bucle para recorrer cada película y mostrarla
    for(let i=0; i<0; i++);

    const elementDiv = document.createElement('div'); //creo un elemento div
    elementDiv.insertAdjacentHTML ("beforebegin","class=div");//añado una clase 

    const elementTitle = document.createElement('title');//creo elemento title
    elementTitle.insertAdjacentHTML ("beforebegin", "class=title", "<p></p>"); //añado clase y texto a title

    const elementImg =document.createElement("img");//creo elemento imagen
    elementImg.insertAdjacentHTML("beforebegin", "class=img","<img scr:https://image.tmdb.org/t/p/w500>", "alt=poster pelicula");//añado class/src/

    elementDiv.appendChild (elementTitle, elementImg);// title e imagen son hijos de Div
    
   contenedor.appendChild(elementDiv);//añado al contenedor el div, por defecto colgarán title e img

    peliculasPorGenero;
}


    




