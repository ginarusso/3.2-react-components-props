
import React from 'react'
import Genre from "./Genre"
import './css/styles.css'
// import Movie from './Movie'

function Container() {

  let genre1 = {
    genre: "🎭 Comedy",
    description: "Comedy is a genre of fiction that consists of discourses or works intended to be humorous or amusing by inducing laughter, especially in theatre, film, stand-up comedy, television, radio, books, or any other entertainment medium.",
    movieTitle1: "Young Frankenstein",
    movieTitle2: "There's Something About Mary",
    year1: "1974",
    year2: "1998"
  }

  let genre2 = {
    genre: "❤️ Romance",
    description: "Romance films involve romantic love stories recorded in visual media for broadcast in theatres or on television that focus on passion, emotion, and the affectionate romantic involvement of the main characters. Typically their journey through dating, courtship or marriage is featured.",
    movieTitle1: "The Notebook",
    movieTitle2: "Casablanca",
    year1: "2004",
    year2: "1942"
  }

  let array = [genre1, genre2]

  return (
    <>
    <div class="container">
      <h1>🎬 Movie App 🎬</h1>
  </div>
  { array.map( (genre, index) => {
    
    return ( 
      <>
    <Genre 
      key = {index}
      genre = {genre.genre}
      description = {genre.description}
      movieTitle1 = {genre.movieTitle1}
      year1 = {genre.year1}
      movieTitle2 = {genre.movieTitle2}
      year2 = {genre.year2}
    />
    {/* <Movie /> */}
    </>
    )
  }) }
 
    </>
  )
}

export default Container