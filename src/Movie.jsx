import React from 'react'

const Movie = ({title, summary, year}) => {

  return (
    <>
    <h2>Title: {title}</h2>
    <h3><span>Summary:</span> {summary}</h3>
    <h3><span>Year:</span> {year}</h3>
    </>
  )
}

export default Movie