import { handleActions } from 'redux-actions';

const initialState = [];

const filmReducer = handleActions(
  {
    FILMS_REQUEST: (state, action) => {
      console.log(action);
    },
    FILM_REQUEST: (state, action) => {
      console.log(action);
    },
    GET_FILMS: (state, action) => [...action.payload],
    GET_FILMSFAIL: (state, action) => action.payload,
    GET_FILM: (state, action) => action.payload,
    GET_FAIL: (state, action) => action.payload,
  },
  { initialState }
);
export default filmReducer;
