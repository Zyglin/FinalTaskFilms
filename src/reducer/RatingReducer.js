import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = [];

const ratingReducer = handleActions(
  {
    [actions.createRatingRequest]: (state, action) => action.payload.FilmId,
    [actions.getRatings]: (state, action) => state,
    [actions.createRatingSuccess]: (state, action) => action.payload,
    [actions.getRatingSuccess]: (state, action) => action.payload,
    [actions.getRatingFail]: (state, action) => action.payload,
  },
  { initialState }
);
export default ratingReducer;
