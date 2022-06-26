const axios = require('axios').default;

const apiLink = "https://api.themoviedb.org/3/"
const apiKey = "api_key=d8ce08001502fc0ae3b6a62b2235661c"

export const getMovies = async () => {
  try {
    const response = await axios.get(`${apiLink}discover/movie?${apiKey}&page=1&with_genres=action`);
    return response.data.results
  } catch (error) {
    console.error(error);
  }
}

export const getMovieById = async (movieId) => {
  try {
    const response = await axios.get(`${apiLink}movie/${movieId}?${apiKey}`)
    return response.data
  } catch(error) {
  console.log(error);
  }
}