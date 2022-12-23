import React, {useContext} from 'react'
import { ReviewContext } from '../ReviewContext'


const imgPath = 'https://image.tmdb.org/t/p/w500/'


const Banner = () => {
    const {selectMovie}= useContext(ReviewContext)
  return (
    <div>
        <div className='' style={{backgroundImage:`url(${imgPath}${selectMovie.backdrop_path})`}}>
          <div>
          <h4>{selectMovie.title}</h4>
          <span>{selectMovie.overview}</span>
          </div>
        </div>
    </div>
  )
}

export default Banner