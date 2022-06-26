import {takeEvery, call, fork, put} from 'redux-saga/effects'
import * as actions from '../actions/movie'
import {getMovieById} from '../api/api'

function* switchMovie(action) {
  try {
    const movieData = yield call(getMovieById, action.id)
    console.log(movieData);
    yield put(
      actions.switchMovieSuccess({
        items: movieData
      })
    )
  } catch (e) {
    console.log(e);
  }
}

function* watchSwitchMovie() {
  yield takeEvery(actions.Types.SWITCH_MOVIE_REQUEST, switchMovie)
}

const movieSaga = [fork(watchSwitchMovie)]

export default movieSaga 