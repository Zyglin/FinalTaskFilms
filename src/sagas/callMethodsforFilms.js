import { call } from 'redux-saga/effects';
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
