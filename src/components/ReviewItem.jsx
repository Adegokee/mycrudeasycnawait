import React from 'react'

const imgPath = "https://image.tmdb.org/t/p/w500/"
const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg'
const ReviewItem = ({movie}) => {
  return (
    <div>
        <img src={movie.poster_path ?`${imgPath}${movie.poster_path}`: unavailable } alt="" />
        <h3>{movie.title}</h3>
        <span>{movie.vote_average}</span>
        <h6>{movie.release_date}</h6>
    </div>
  )
}

export default ReviewItem