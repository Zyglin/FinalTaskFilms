import { handleActions } from 'redux-actions';

const initialState = [];

const filmReducer = handleActions(
  {
    GET_FILMS: (state, action) => [...action.payload.films],
    GET_FILM: (state, action) => action.payload.film,
  },
  { initialState }
);
export default filmReducer;
