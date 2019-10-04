import { handleActions } from 'redux-actions';

const initialState = [];

const ratingReducer = handleActions(
  {
    CREATE_RATING_REQUESTFORFILM: (state, action) => action.payload.FilmId,
    RATING_REQUESTFORFILM: (state, action) => {
      console.log(action);
    },
    CREATE_RATING_SUCCESS: (state, action) => {
      console.log(action);
      return action.payload;
    },
    RATING_SUCCESS: (state, action) => action.payload,
    RATNG_FAIL: (state, action) => action.payload,
  },
  { initialState }
);
export default ratingReducer;
