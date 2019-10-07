import { createSelector } from 'reselect';

const filmItemsSelector = state => state.data.filmReducer;
const commentItemsSelector = state => state.data.commentReducer;
const ratingItemSelector = state => state.data.ratingReducer;
const loginItemSelector = state => state.login;

export const filmSelector = createSelector(
  filmItemsSelector,
  items => items
);

export const commentSelector = createSelector(
  commentItemsSelector,
  items => items
);

export const ratingSelector = createSelector(
  ratingItemSelector,
  item => item
);

export const loginSelector = createSelector(
  loginItemSelector,
  item => item
);

export const mailSelector = createSelector(
  loginItemSelector,
  item => item && item.user
);

export const jwtSelector = createSelector(
  loginItemSelector,
  item => item && item.jwt
);
export const fullNameSelector = createSelector(
  loginItemSelector,
  item => item && item.fullName
);
export const numberSelector = createSelector(
  loginItemSelector,
  item => item && item.number
);
