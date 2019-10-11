import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = [];

const filmReducer = handleActions(
  {
    [actions.filmsRequest]: (state, action) => state,
    [actions.filmRequest]: (state, action) => state,
    [actions.getFilms]: (state, action) => [...action.payload],
    [actions.getFilmsFail]: (state, action) => action.payload,
    [actions.getFilmSuccess]: (state, action) => action.payload,
    [actions.getFail]: (state, action) => action.payload,
  },
  { initialState }
);
export default filmReducer;
