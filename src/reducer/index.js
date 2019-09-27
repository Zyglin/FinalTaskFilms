import { combineReducers } from 'redux';
import filmReducer from './FilmsReducer';
import commentReducer from './CommentsReducer';
import ratingReducer from './RatingReducer';

const rootReducer = combineReducers({
  filmReducer,
  commentReducer,
  ratingReducer,
});

export default rootReducer;
