import { handleActions } from 'redux-actions';

const initialState = [];

const ratingReducer = handleActions(
  {
    CREATE_RATING_REQUEST: (state, action) => {
      console.log(action);
    },
    RATING_REQUESTFORFILM: (state, action) => {
      console.log(action);
    },
    RATING_SUCCESS: (state, action) => action.payload,
    RATNG_FAIL: (state, action) => action.payload,
  },
  { initialState }
);
export default ratingReducer;
