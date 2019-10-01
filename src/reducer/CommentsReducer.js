import { handleActions } from 'redux-actions';

const initialState = [];

const commentReducer = handleActions(
  {
    GET_COMMENTS: (state, action) => [...action.payload.comments],
  },
  { initialState }
);
export default commentReducer;
