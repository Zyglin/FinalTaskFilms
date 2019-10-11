import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  user: null,
  token: null,
};

const dataReducer = handleActions(
  {
    [actions.loginRequest]: (state, action) => action.payload.data,
    [actions.loginSuccess]: (state, action) => action.payload,
    [actions.loginFail]: (state, action) => action.payload,
    [actions.registerRequest]: (state, action) => action.payload.data,
    [actions.registerSuccess]: (state, action) => action.payload,
    [actions.registerFail]: (state, action) => action.payload,
    [actions.logOut]: (state, action) => null,
    [actions.editUserUpdate]: (state, action) => state,
    [actions.editUserUpdateSuccess]: (state, action) => action.payload,
  },
  { initialState }
);
export default dataReducer;
