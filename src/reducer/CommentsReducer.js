import { handleActions } from 'redux-actions';

const initialState = [];

const commentReducer = handleActions(
  {
    CREATE_COMMENT_REQUEST: (state, action) => {
      console.log(action);
    },
    COMMENTS_REQUESTFORFILM: (state, action) => {
      console.log(action);
    },
    COMMENTS_SUCCESS: (state, action) => [...action.payload],
    COMMENTS_FAIL: (state, action) => action.payload,
  },
  { initialState }
);
export default commentReducer;
