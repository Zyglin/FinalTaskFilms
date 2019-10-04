import { handleActions } from 'redux-actions';

const initialState = [];

const commentReducer = handleActions(
  {
    CREATE_COMMENTS_REQUESTFORFILM: (state, action) => action.payload.FilmId,
    COMMENTS_REQUESTFORFILM: (state, action) => {
      console.log(action);
    },
    CREATE_COMMENTS_SUCCESS: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
    COMMENTS_SUCCESS: (state, action) => [...action.payload],
    COMMENTS_FAIL: (state, action) => action.payload,
  },
  { initialState }
);
export default commentReducer;
