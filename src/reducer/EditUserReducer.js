import { handleActions } from 'redux-actions';

const initialState = {};

const editUserReducer = handleActions(
  {
    EDIT_USER_REQUESTFORFILM: (state, action) => action.payload,
    EDIT_USER_SUCCESS: (state, action) => action.payload,
    EDIT_USER_FAIL: (state, action) => action.payload,
  },
  { initialState }
);
export default editUserReducer;
