import { takeEvery, put, select } from 'redux-saga/effects';
import lodash from 'lodash';
import * as callMethods from './callMethodsforFilms';
import { jwtSelector } from '../selectors';

export function* mySagaGenericFilm(action) {
  const { payload, type } = action;
  console.log(type);
  const method = lodash.camelCase(type);
  console.log(method);
  const token = yield select(jwtSelector);
  const request = callMethods[method](payload, token);
  try {
    const response = yield request;
    const successType = action.type.replace('_REQUESTFORFILM', '_SUCCESS');
    yield put({ type: successType, payload: response.data });
  } catch (err) {
    const failedType = action.type.replace('_REQUESTFORFILM', '_FAIL');
    yield put({ type: failedType, payload: err.response, err });
  }
}

export function* mySagaFilm(action) {
  yield takeEvery(({ type }) => /_REQUESTFORFILM$/g.test(type), mySagaGenericFilm);
}
