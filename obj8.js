// Create a "movie" object with a nested "director" object containing firstName and lastName. Print the director's full name.

let movie = {
  director : {
    firstName : "Akash",
    lastName : "Gupta"
  }
}
console.log(movie.director.firstName + " " + movie.director.lastName);