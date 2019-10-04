import { call, put, select } from 'redux-saga/effects';
import * as axiosMethods from '../axios';
import { loginSuccess, loginFail, registerSuccess, registerFail, getCommentsSuccess, getCommentFail, getRating, getRatingFail } from '../actions';
import { jwtSelector } from '../selectors';

export function* loginRequest(payload) {
  try {
    const user = yield call(axiosMethods.axiosForLoginAndRegistration, 'http://localhost:50740/api/user', payload, 'post');
    if (user.data.jwt !== null) {
      yield put(loginSuccess(user.data));
    }
  } catch (e) {
    yield put(loginFail(e));
  }
}

export function* registerRequest(payload) {
  try {
    const register = yield call(axiosMethods.axiosForLoginAndRegistration, 'http://localhost:50740/api/registration', payload, 'post');
    yield put(registerSuccess(register.status));
  } catch (e) {
    yield put(registerFail(e));
  }
}

export function* createCommentRequest(payload) {
  try {
    const token = yield select(jwtSelector);
    yield call(axiosMethods.axiosCreatePost, 'http://localhost:50740/api/comment', payload, 'post', token);
    const allComments = yield call(axiosMethods.axiosGet, `http://localhost:50740/api/comment/${payload.FilmId}`, 'get', token);
    yield put(getCommentsSuccess(allComments.data));
  } catch (e) {
    yield put(getCommentFail(e));
  }
}

export function* createRatingRequest(payload) {
  try {
    const token = yield select(jwtSelector);
    yield call(axiosMethods.axiosCreatePost, 'http://localhost:50740/api/rating', payload, 'post', token);
    const ratings = yield call(axiosMethods.axiosGet, `http://localhost:50740/api/rating/${payload.FilmId}`, 'get', token);
    yield put(getRating(ratings.data));
  } catch (e) {
    yield put(getRatingFail(e));
  }
}
