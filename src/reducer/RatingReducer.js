import { handleActions } from 'redux-actions';

const initialState = [];

const ratingReducer = handleActions(
  {
    GET_RATING: (state, action) => action.payload.rating,
  },
  { initialState }
);
export default ratingReducer;
