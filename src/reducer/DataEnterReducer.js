import { REQUEST_POSTS, REQUEST_REGISTRATION_POSTS, LOGIN_USER, LOGOUT_USER } from '../actions';

const initialState = {};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return action.data;
    case LOGIN_USER:
      return action.payload;
    case LOGOUT_USER:
      return null;
    case REQUEST_REGISTRATION_POSTS:
      return action.data;
    default:
      return state;
  }
}
export default dataReducer;
