// The Movie component accepts the following props:
// title
// year Note: the title is a nested prop.
//getting error with Movie.jsx

import React from 'react'

const Movie = ({title, year}) => {

let movie1 = {
  title: "An American grandson of the infamous scientist, struggling to prove that his grandfather was not as insane as people believe, is invited to Transylvania, where he discovers the process that reanimates a dead body.",
  year: "1974"
}

let movie2 = {
  title: "A man gets a chance to meet up with his dream girl from high school, even though his date with her back then was a complete disaster.",
  year: "1998"
}

let movie3 = {
  title: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom. However, social differences soon get in the way.",
  year: "2004"
}

let movie4 = {
  title: "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
  year: "1942"
}


let array = [movie1, movie2, movie3, movie4]

let movies = array.map((movie => movie))
// console.log(movies)

  return (

    <>

    <h2>Title: {movies.title}</h2>
    <h3>Year: {movies.year}</h3>
    </>
  )
}

export default Movie

// let array = [movie1, movie2, movie3, movie4]
  
// return (
//     <>
// {array.map( (movie, index) => {
//   return (
//     <>
//     <Movie 
//     key = {index}
//     title = {movie.title}
//     year = {movie.year}
//     />
    



//     </>
 
//  )
// }) }
//     <h2>Title: {title}</h2>
//     <h3>Year: {year}</h3>
//     </>
//   )
// }

// export default Movie