import { combineReducers } from 'redux';
import data from './DataEnterReducer';
import filmReducer from './FilmsReducer';
import commentReducer from './CommentsReducer';

const rootReducer = combineReducers({
  data,
  filmReducer,
  commentReducer,
});

export default rootReducer;
