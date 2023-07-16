
import React from 'react'
import Genre from "./Genre"
import './css/styles.css'
import frankenstein from './images/young-frankenstein.jpg'
import mary from './images/mary.jpg'
import notebook from './images/notebook.jpeg'
import casablanca from './images/casablanca.jpeg'

function Container() {

  let genre1 = {
    genre: "🎭 Comedy",
    description: "Comedy is a genre of fiction that consists of discourses or works intended to be humorous or amusing by inducing laughter, especially in theatre, film, stand-up comedy, television, radio, books, or any other entertainment medium.",
    movieTitle1: "Young Frankenstein",
    image1: frankenstein,
    summary1: "An American grandson of the infamous scientist, struggling to prove that his grandfather was not as insane as people believe, is invited to Transylvania, where he discovers the process that reanimates a dead body.",
    year1: "1974",
    movieTitle2: "There's Something About Mary",
    image2: mary,
    summary2: "A man gets a chance to meet up with his dream girl from high school, even though his date with her back then was a complete disaster.",
    year2: "1998"
  }

  let genre2 = {
    genre: "❤️ Romance",
    description: "Romance films involve romantic love stories recorded in visual media for broadcast in theatres or on television that focus on passion, emotion, and the affectionate romantic involvement of the main characters. Typically their journey through dating, courtship or marriage is featured.",
    movieTitle1: "The Notebook",
    image1: notebook,
    summary1: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom. However, social differences soon get in the way.",
    year1: "2004",
    movieTitle2: "Casablanca",
    image2: casablanca,
    summary2: "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
    year2: "1942"
  }

  let array = [genre1, genre2]

  return (
    <>
    <div className="container">
      <h1>🎬 Movie App 🎬</h1>
  </div>
  { array.map( (genre, index) => {
 
    return ( 
   
    <Genre 
      key = {index}
      genre = {genre.genre}
      description = {genre.description}
      movieTitle1 = {genre.movieTitle1}
      image1 = {genre.image1}
      summary1 = {genre.summary1}
      year1 = {genre.year1}
      movieTitle2 = {genre.movieTitle2}
      image2 = {genre.image2}
      summary2 = {genre.summary2}
      year2 = {genre.year2}
    />
  
    )
  }) }
 
    </>
  )
}

export default Container