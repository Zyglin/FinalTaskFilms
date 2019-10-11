import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = [];

const commentReducer = handleActions(
  {
    [actions.createCommentRequest]: (state, action) => state,
    [actions.getComments]: (state, action) => state,
    [actions.createCommentSuccess]: (state, action) => [...state],
    [actions.getCommentsSuccess]: (state, action) => [...action.payload],
    [actions.getCommentFail]: (state, action) => action.payload,
    [actions.CommentsClean]: (state, action) => initialState,
  },
  { initialState }
);
export default commentReducer;
