import { GET_RATING } from '../actions';

const initialState = [];

function ratingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RATING:
      return action.payload;
    default:
      return state;
  }
}
export default ratingReducer;
