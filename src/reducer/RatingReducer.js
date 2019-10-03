import { handleActions } from 'redux-actions';

const initialState = [];

const ratingReducer = handleActions(
  {
    CREATE_RATING_REQUEST: (state, action) => {
      console.log(action);
    },
    GET_RATING: (state, action) => action.payload,
    GET_RATNG_FAIL: (state, action) => action.payload,
  },
  { initialState }
);
export default ratingReducer;
