import React from 'react'
// import './css/styles.css'

const Movie = ({title, image, summary, year}) => {

  return (
    <><div className = "movie">
      <h2>Title: {title}</h2>
      <img src={image} alt="movie poster" />
      <h3><span>Summary:</span> {summary}</h3>
      <h3><span>Year:</span> {year}</h3>
    </div>
    </>
  )
}

export default Movie