import { actionType } from "./actionType";

const initialState = {
  movieDataBase: [],
  watchlist: [],
  currentState: null,
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ADD_TO_WATCHLIST:
      const item = state.movieDataBase.find((el) => el.id === payload.id);
      const inWatch = state.watchlist.find((item) =>
        item.id === payload.id ? true : false
      );

      return {
        ...state,
        watchlist: inWatch
          ? state.watchlist.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.watchlist, { ...item, qty: 1 }],
      };

    case actionType.REMOVE_MOVIE:
      return {
        ...state,
        watchlist: state.watchlist.filter((item) => item.id !== payload.id),
      };

    case actionType.ADJUST_MOVIE_QTY:
      return {
        ...state,
        watchlist: state.watchlist.map((item) =>
          item.id === payload.id ? { ...item, qty: +payload.qty } : item
        ),
      };

    case actionType.ADD_MOVIE:
      return {
        ...state,
        movieDataBase: payload,
      };

    case actionType.VIEW_SINGLE_MOVIE:
      return {
        ...state,
        currentState: payload,
      };

    default:
      return state;
  }
};
