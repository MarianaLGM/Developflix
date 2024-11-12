


//Importar pelis
import peliculas from './peliculas.js'
console.log(peliculas);

//Creo una función que contenga dos parámetros (el genero, contenedor)

function peliculasPorGenero(generoId, divPelis) {  

//Recojo en una variable el contenedor y en otra variable cada genero de la película:

   const divPelisAccion=document.getElementById("genero-28");//contenedor
   const generoIdAccion=peliculas.filter(pelicula=>pelicula.genre_ids.includes(28));//Genero
   //console.log(divPelisAccion);
   //console.log("pelis Accion", generoIdAccion);

   const divPelisThriller=document.getElementById("genero-53");//contenedor
   const generoIdThriller=peliculas.filter(pelicula=>pelicula.genre_ids.includes(53));//Genero
   //console.log(divPelisThriller);
   //console.log("pelis Thriller", generoIdThriller);

   const divPelisAventura=document.getElementById("genero-12");//contenedor
   const generoIdAventura=peliculas.filter(pelicula=>pelicula.genre_ids.includes(12));//Genero
   //console.log(divPelisAventura);
   //console.log("pelis Aventura", generoIdAventura);
    
   //creo un div, un titulo y una img para meter todo dentro de los siguientes contenedores:contenedorAccion (html),contenedorThriller(html) y contendorAventura(html)

   generoIdAccion.filter(pelicula =>{
      const elementDiv = document.createElement("div"); //creo un elemento div
      elementDiv.classList.add("contenedor");//añado una clase 

      const elementImg =document.createElement("img");//creo elemento imagen
      elementImg.setAttribute("src","https://image.tmdb.org/t/p/w500"+(pelicula.poster_path));//añado class/src/
      
      const elementTitle = document.createElement("h3");//creo elemento title
      elementTitle.classList.add("title");//añado una clase 
      elementTitle.innerText= pelicula.title; //añado title

      elementDiv.appendChild(elementImg);
      elementDiv.appendChild(elementTitle);
      divPelisAccion.appendChild(elementDiv);

   })

   generoIdThriller.filter(pelicula =>{
      const elementDiv = document.createElement("div"); //creo un elemento div
      elementDiv.classList.add("contenedor");//añado una clase 
   
      const elementImg =document.createElement("img");//creo elemento imagen
      elementImg.setAttribute("src","https://image.tmdb.org/t/p/w500"+(pelicula.poster_path));//añado class/src/
         
      const elementTitle = document.createElement("h3");//creo elemento title
      elementTitle.innerText= pelicula.title; //añado title 
   
      elementDiv.appendChild(elementImg);
      elementDiv.appendChild(elementTitle);
      divPelisThriller.appendChild(elementDiv);

   })

   generoIdAventura.filter(pelicula =>{
      const elementDiv = document.createElement("div"); //creo un elemento div
      elementDiv.classList.add("contenedor");//añado una clase 
      
      const elementImg =document.createElement("img");//creo elemento imagen
      elementImg.setAttribute("src","https://image.tmdb.org/t/p/w500"+(pelicula.poster_path));//añado class/src/
            
      const elementTitle = document.createElement("h3");//creo elemento title
      elementTitle.innerText= pelicula.title; //añado clase y texto a title REVISAR PELICULAS TITLE
      
      elementDiv.appendChild(elementImg);
      elementDiv.appendChild(elementTitle);
      divPelisAventura.appendChild(elementDiv) 
       
   })
};



// llamo a la funcion y meter como argumentos cada uno de los generos y contenedor donde va cada uno.

peliculasPorGenero (28, (divPelisAccion)=>{
   console.log (divPelisAccion);
})



