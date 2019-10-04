import { call, put } from 'redux-saga/effects';
import * as axiosMethods from '../axios';

export function* filmsRequestforfilm(payload, token) {
  return yield call(axiosMethods.axiosGet, 'http://localhost:50740/api/films', 'get', token);
}

export function* filmRequestforfilm(payload, token) {
  return yield call(axiosMethods.axiosGet, `http://localhost:50740/api/films/${payload}`, 'get', token);
}

export function* commentsRequestforfilm(payload, token) {
  return yield call(axiosMethods.axiosGet, `http://localhost:50740/api/comment/${payload}`, 'get', token);
}

export function* ratingRequestforfilm(payload, token) {
  return yield call(axiosMethods.axiosGet, `http://localhost:50740/api/rating/${payload}`, 'get', token);
}

export function* createCommentsRequestforfilm(payload, token) {
  return yield call(axiosMethods.axiosCreatePost, 'http://localhost:50740/api/comment', payload, 'post', token);
}

export function* createRatingRequestforfilm(payload, token) {
  return yield call(axiosMethods.axiosCreatePost, 'http://localhost:50740/api/rating', payload, 'post', token);
}

export function* createCommentSuccess(action) {
  yield put({ type: 'COMMENTS_REQUESTFORFILM', payload: action.payload });
}

export function* createRatingSuccess(action) {
  yield put({ type: 'RATING_REQUESTFORFILM', payload: action.payload });
}
