import { handleActions } from 'redux-actions';

const initialState = {};

const dataReducer = handleActions(
  {
    REQUEST_POSTS: (state, action) => action.payload.data,
    LOGIN_USER: (state, action) => action.payload.data,
    LOGOUT_USER: (state, action) => null,
  },
  { initialState }
);
export default dataReducer;
