import { actionType } from "./actionType";

export const addToWatchList = (watchID) => {
  return {
    type: actionType.ADD_TO_WATCHLIST,
    payload: {
      id: watchID,
    },
  };
};

export const removeFromWatchList = (watchID) => {
  return {
    type: actionType.REMOVE_MOVIE,
    payload: {
      id: watchID,
    },
  };
};

export const adjustWatchList = (watchID, value) => {
  return {
    type: actionType.ADJUST_MOVIE_QTY,
    payload: {
      id: watchID,
      qty: value,
    },
  };
};

export const addMovie = (watch) => {
  return {
    type: actionType.ADD_MOVIE,
    payload: watch,
  };
};

export const viewMovie = (watch) => {
  return {
    type: actionType.VIEW_SINGLE_MOVIE,
    payload: watch,
  };
};
