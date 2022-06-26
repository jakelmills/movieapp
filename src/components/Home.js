import {getMovies} from '../api/api'
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (movies.length === 0) {
      const movieEffect = async () =>{
        const movies =  await getMovies()
        setMovies(movies)
      }
      movieEffect()
    }
  }, [setMovies])
  
  if (movies.length > 0) {
    return (
      <div>
        {movies.map((movie) => {
          return (
            <Link to={{pathname: `/movie/${movie.id}`, state:{movie: movie}}} key={movie.id}>
              <div >
                <p>{movie.original_title}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{height: 300, width: 'auto'}}></img>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default Home 