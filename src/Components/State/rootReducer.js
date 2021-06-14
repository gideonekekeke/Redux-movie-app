import { combineReducers } from "redux";
import { movieReducer } from "./reducerState";

export const reducer = combineReducers({
  movie: movieReducer,
});
