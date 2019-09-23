import { GET_FILMS, GET_FILM } from '../actions';

const initialState = [];

function filmReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILMS:
      return [...action.payload];
    case GET_FILM:
      return action.payload;
    default:
      return state;
  }
}
export default filmReducer;
