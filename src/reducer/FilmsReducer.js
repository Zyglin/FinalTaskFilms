import { handleActions } from 'redux-actions';

const initialState = [];

const filmReducer = handleActions(
  {
    FILMS_REQUESTFORFILM: (state, action) => {
      console.log(action);
    },
    FILM_REQUESTFORFILM: (state, action) => {
      console.log(action);
    },
    FILMS_SUCCESS: (state, action) => [...action.payload],
    FILMS_FAIL: (state, action) => action.payload,
    FILM_SUCCESS: (state, action) => action.payload,
    FILM_FAIL: (state, action) => action.payload,
  },
  { initialState }
);
export default filmReducer;
