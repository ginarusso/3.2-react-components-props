
import './css/styles.css'
import Movie from './Movie'
// import './css/styles.css'

const Genre = ({genre, description, movieTitle1, movieTitle2, summary1, summary2, year1, year2, image1, image2}) => {

  return (
 <div className="genre">  
    <h2> Genre: {genre}</h2>
    <h3>{description}</h3>
    <Movie title = {movieTitle1} image = {image1} summary = {summary1} year = {year1} />
    <Movie title = {movieTitle2} image = {image2} summary = {summary2} year = {year2} />
</div>
)
}

export default Genre;