import { CREATE_COMMENT, GET_COMMENTS } from '../actions';

const initialState = [];

function commentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return [...action.payload];
    case CREATE_COMMENT:
      return [...action.payload];
    default:
      return state;
  }
}
export default commentReducer;
