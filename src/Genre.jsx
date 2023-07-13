
// The Genre component accepts the following props:
// name
// description
// movieTitle1
// movieTitle2
// The Genre would have the following:
// header for the genre title
// 2 movie components with information about the title and the year
// import Movie from './Movie'
import './css/styles.css'

const Genre = ({genre, description, movieTitle1, movieTitle2, year1, year2}) => {
  // let genre = "Comedy"
  // let description= "Comedy is a genre of fiction that consists of discourses or works intended to be humorous or amusing by inducing laughter, especially in theatre, film, stand-up comedy, television, radio, books, or any other entertainment medium."
  // let movieTitle1 = "Young Frankenstein"
  // let movieTitle2 = "There's Something About Mary"

  return (
 <div className="genre">  
    <h2> Genre: {genre}</h2>
    <p> <span>Description:</span> {description}</p> 
    <h2>Movie Title: {movieTitle1}</h2>
    {/* <Movie year = {year1} /> */}
    <h3>Year: {year1}</h3>
    <h2>Movie Title: {movieTitle2}</h2>
    {/* <Movie year = {year2} /> */}
    <h3>Year: {year2}</h3>

</div>
)
}

export default Genre;