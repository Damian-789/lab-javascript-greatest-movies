


// Por qué no sale??????


/*const ingredients = ["tomato", "lettuce", "onion"];

const [ingredient1 , ingredient2, ingresdient3] = ingredients;

console.log(ingredient1);
*/




/*
// Por qué no sale??????
const europeanCampuses = [
    ['madrid', 'es'],
    ['barcelona', 'es'],
    ['berlin', 'de'],
    ['paris', 'fr'],
    ['amsterdam', 'nl'],
    ['lisbon', 'pt'],
  ];

  const [[campusSpain1], [campusSpain2, country], [campus5, theCountry]] = europeanCampuses;

console.log(campusSpain1, campusSpain2, country, theCountry);
// ==> 'madrid' 'barcelona' 'es' 'de'
*/

// Por qué no sale??????
/*
const [a, b] = [1];
console.log(a * b); // <== ???
*/
/*
const compra = [

  {tipoDeComida: "tomate",
  cantidad: 5,
  comprado: false,
  },
  /*{tipoDeComida: "lechuga",
  cantidad: 3,
  comprado: false,
  },
  {tipoDeComida: "helado",
  cantidad: 4,
  sabores: ["chocolate", "vainilla", "fresa"]
  }
]

console.log(compra[0].cantidad)
*/


const initialArr =[1,2,3,4,5]

const newArr = initialArr.map((el) => {

  return el*2;
}
)

console.log(newArr)

// Ejercicio 1
/*
function getAllDirectors(moviesArray) {

const result = []

moviesArray.forEach((movie) => {

    if (moviesArray.indexOf(movie.director) === -1 ) {
        result.push(movie.director)
    }
    
});
return result

}


console.log(getAllDirectors(movies))

*/

// Solucion Damian - MAP 

/*
function getAllDirectors(moviesArray) {

const result = moviesArray.map((movie) => {
     movie.director
})

return result
}
    console.log(getAllDirectors(movies))

*/