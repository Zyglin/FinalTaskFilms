import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {};

const editUserReducer = handleActions(
  {
    [actions.editUserRequest]: (state, action) => state,
    [actions.editUserSuccess]: (state, action) => action.payload,
    [actions.editUserFail]: (state, action) => action.payload,
  },
  { initialState }
);
export default editUserReducer;
