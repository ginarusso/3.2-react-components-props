// The Movie component accepts the following props:
// title
// year Note: the title is a nested prop.

import React from 'react'


const Movie = (title, year) => {

let movie1 = {
  title: "Young Frankenstein",
  year: "1974"
}

let movie2 = {
  title: "There's Something About Mary",
  year: "1998"
}

let movie3 = {
  title: "The Notebook",
  year: "2004"
}

let movie4 = {
  title: "Casablanca",
  year: "1942"
}


let array = [movie1, movie2, movie3, movie4]

  return (

    <>


    
    MOVIE COMPONENT
    <h2>Title: {title}</h2>
    <h3>Year: {year}</h3>
    </>
  )
}

export default Movie