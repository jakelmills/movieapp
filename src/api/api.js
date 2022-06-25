const axios = require('axios').default;

const apiLink = "https://api.themoviedb.org/3/"
const apiKey = "api_key=d8ce08001502fc0ae3b6a62b2235661c"

const getMovies = async () => {
  try {
    const response = await axios.get(`${apiLink}discover/movie?${apiKey}&page=1&with_genres=action`);
    console.log(response);
    return response.data.results
  } catch (error) {
    console.error(error);
  }
}

export default getMovies