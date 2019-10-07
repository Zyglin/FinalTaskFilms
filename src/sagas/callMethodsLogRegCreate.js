import { call, put } from 'redux-saga/effects';
import * as axiosMethods from '../axios';
import { loginSuccess, loginFail, registerSuccess, registerFail } from '../actions';

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
