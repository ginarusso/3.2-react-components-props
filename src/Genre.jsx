
import './css/styles.css'
import Movie from './Movie'

const Genre = ({genre, description, movieTitle1, movieTitle2, summary1, summary2, year1, year2}) => {

  return (
 <div className="genre">  
    <h2> Genre: {genre}</h2>
    <h3>{description}</h3>
    <Movie title = {movieTitle1} summary = {summary1} year = {year1} />
    <Movie title = {movieTitle2} summary = {summary2} year = {year2} />
</div>
)
}

export default Genre;