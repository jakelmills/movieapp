import movieSaga from "./movie";
import {all} from 'redux-saga/effects';

export default function* routeSaga() {
  yield all([
    ...movieSaga
  ])
}