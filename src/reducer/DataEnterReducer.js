import { REQUEST_POSTS, REQUEST_REGISTRATION_POSTS, LOGIN_USER, LOGOUT_USER } from '../actions';

const initialState = '';

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return action.subreddit;
    case LOGIN_USER:
      return action.payload;
    case LOGOUT_USER:
      return state;
    case REQUEST_REGISTRATION_POSTS:
      return action.subreddit;
    default:
      return state;
  }
}
export default dataReducer;
