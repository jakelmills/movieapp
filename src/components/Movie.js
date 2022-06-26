import React, {useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { switchMovieRequest } from '../actions/movie';

const Movie = () => {
  const dispatch = useDispatch()
  const movie = useSelector(state => state.Movie.items)
  
  const {id} = useParams()

  useEffect(() => {
    // if (movie.length > 0) {
      dispatch(switchMovieRequest(id))
    // }
	}, [])

  console.log(movie, 'finder');


  return(
    <div>
      
    </div>
  )
}

export default Movie