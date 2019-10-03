import { handleActions } from 'redux-actions';

const initialState = {
  user: null,
  token: null,
};

const dataReducer = handleActions(
  {
    LOGIN_REQUEST: (state, action) => action.payload.data,
    LOGIN_SUCCESS: (state, action) => action.payload,
    LOGIN_FAIL: (state, action) => action.payload,
    REGISTER_REQUEST: (state, action) => action.payload.data,
    REGISTER_SUCCESS: (state, action) => action.payload,
    REGISTER_FAIL: (state, action) => action.payload,
    LOGOUT_USER: (state, action) => null,
  },
  { initialState }
);
export default dataReducer;
