import { handleActions } from 'redux-actions';

const initialState = [];

const commentReducer = handleActions(
  {
    CREATE_COMMENT_REQUEST: (state, action) => {
      console.log(action);
    },
    GET_COMMENTS: (state, action) => [...action.payload],
    GET_COMMENT_FAIL: (state, action) => action.payload,
  },
  { initialState }
);
export default commentReducer;
