const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Go ahead and create a function named getAllDirectors() that receives an array of movies as an argument and returns a new (mapped) array.

// Solucion Damian - foreach:

function getAllDirectors(moviesArray) {
  const allDirectors = [];

  moviesArray.forEach((movie) => {
    if (allDirectors.indexOf(movie.director) === -1) {
      allDirectors.push(movie.director);
    }
  });

  return allDirectors;
}
console.log(getAllDirectors(movies));

// Solulcion Damian MAP
/*


function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map((movie) => 
    movie.director
    )

    return allDirectors

}

console.log(getAllDirectors(movies))


*/

// Primera Solucion Alejandro - con .map
/*
function getAllDirectors(moviesArray) {

return moviesArray.map((movie) => movie.director);
}

console.log(getAllDirectors(movies))
*/

// Segunda Solucion Alejandro - con .foreach
/*
function getAllDirectors(moviesArray) {

    const result =[];

    moviesArray.forEach((movie) => {

    if(result.indexOf(movie.director) === -1 ) {
        result.push(movie.director);
            }
      
    });
return result 
}

console.log(getAllDirectors(movies))

*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(moviesArray) {
    
 let result = moviesArray.filter((movie) => 
        movie.director ==="Steven Spielberg" && movie.genre.includes("Drama")
);

return result.length
}


console.log(howManyMovies(movies))



return moviesArray.filter(
        (movie) => 
        movie.genre.includes("drama") && movie.director === "Steven Spielberg"  
    ).length





    let result = moviesArray.filter((movie) => 
    movie.director === "Steven Spielberg" && movie.genre.includes("drama")
    )

return result.length



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

// Hice 2 soluciones - Damian

//solucion 1
function scoresAverage(moviesArray) {

    const sum = moviesArray.reduce((movie) => {
    movie.score 
        })

    return sum/moviesArray.length
}

console.log(scoresAverage(movies))


//Solucion 2 de Damian del ejercicio 3

function scoresAverage(moviesArray) {
  const sum = moviesArray.reduce((previusValue, currentValue) => { //previusValue es un numero que acumula el resultado 
    return previusValue + currentValue.score; //currentValue es la pelicula a la cual accedemos a su score
  }, 0);
  return sum / moviesArray.length;
}

console.log(scoresAverage(movies));

//Solucion Alejandro Ejercicio 3
/*
function scoresAverage(moviesArray) {

const sum = moviesArray.reduce((a, b) => {
if(b.score !== ""  && !b.score) {

    return a + b.score;
}

},0);
return sum / moviesArray.length
// return (sum / moviesArray.length).foFixed(2) Así sería la restricciòn de decimales, ¿no?
}

console.log(scoresAverage(movies))
*/

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((movie) => {
     movie.genre.includes("Drama")
    })
    const sum = dramaMovies.reduce((a,b) => {
       return a + b.score / dramaMovies.length // ¿por què no es return movie a + b.score?
        },0);
        return sum 

}

console.log(dramaMoviesScore(movies))


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(moviesArray) {
    
    const newMovies = [...moviesArray]
    return newMovies.sort((a,b) => a.year - b.year)

}


console.log(orderByYear(movies))



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newMovies = moviesArray.sort((x,y) => {
    if (x.title < y.title) {
        return -1
    } else return 0
    } )
return movies.map((movie) => movie.title).slice(0,20)
}
console.log(orderAlphabetically(movies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
//function bestYearAvg(moviesArray) {}
