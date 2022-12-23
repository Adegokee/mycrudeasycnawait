import React, {useState,createContext} from 'react'


const url='https://api.themoviedb.org/3/'
const imgPath='https://image.tmdb.org/t/p/w500/'


export const ReviewContext = createContext()


const ReviewProvider = ({children}) => {
    const [review, setReview]= useState("")
    const [selectMovie, setSelectMovie] = useState("")
    const [searchKey, setSearchKey] = useState("")


  return (
    <ReviewContext.Provider value= {{review, setReview, setSelectMovie, selectMovie, searchKey, setSearchKey }}>

        {children}

    </ReviewContext.Provider>
  )
}

export default ReviewProvider