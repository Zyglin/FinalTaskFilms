import { combineReducers } from 'redux';
import filmReducer from './FilmsReducer';
import commentReducer from './CommentsReducer';
import ratingReducer from './RatingReducer';
import editUserReducer from './EditUserReducer';

const rootReducer = combineReducers({
  filmReducer,
  commentReducer,
  ratingReducer,
  editUserReducer,
});

export default rootReducer;
