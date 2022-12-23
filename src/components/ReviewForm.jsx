import React,{useState, useContext} from 'react'
import { ReviewContext } from '../ReviewContext'



const ReviewForm = () => {
    const {setSearchKey}= useContext(ReviewContext)
    const [film, setFilm]= useState('')
const handleSubmit = (e) => {
e.preventDefault()
setSearchKey(film)
setFilm('')


}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search Movie' value={film} onChange={(e) => setFilm(e.target.value)}  />
        <button>Search</button>
      </form>
      
    </div>
  )
}

export default ReviewForm
