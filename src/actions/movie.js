export const Types = {
  SWITCH_MOVIE_REQUEST: 'SWITCH_MOVIE_REQUEST',
  SWITCH_MOVIE_SUCCESS: 'SWITCH_MOVIE_SUCCESS',
} 

export const switchMovieRequest = (id) => ({
  type: Types.SWITCH_MOVIE_REQUEST,
  id,
})

export const switchMovieSuccess = ({items}) => ({
  type: Types.SWITCH_MOVIE_SUCCESS,
  payload: {items},
})