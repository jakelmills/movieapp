import { combineReducers } from "redux";
import MovieReducer from "./movie";

export default combineReducers({
  Movie: MovieReducer,
})