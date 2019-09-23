import { combineReducers } from 'redux';
import data from './DataEnterReducer';
import filmReducer from './FilmsReduser';
import commentReducer from './CommentsReduser';

const rootReducer = combineReducers({
  data,
  filmReducer,
  commentReducer,
});

export default rootReducer;
