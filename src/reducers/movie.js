import {Types} from '../actions/movie'

const initialState = {
  items: []
}

const MovieReducer = (state = initialState, action) => {
  console.log(action, action.payload, 'reducer');
  switch(action.type){
    case Types.SWITCH_MOVIE_SUCCESS: 
      return {items: action.payload.items};
    default: 
      return state;
  }
}

export default MovieReducer