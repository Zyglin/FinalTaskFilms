import { combineReducers } from 'redux';
import data from './DataEnterReducer';
import filmReducer from './FilmsReducer';
import commentReducer from './CommentsReducer';
import ratingReducer from './RatingReducer';

const rootReducer = combineReducers({
  data,
  filmReducer,
  commentReducer,
  ratingReducer,
});

export default rootReducer;
