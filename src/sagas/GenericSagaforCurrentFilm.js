import { takeEvery, put, select } from 'redux-saga/effects';
import lodash from 'lodash';
import * as callMethods from './callMethodsforFilms';
import { jwtSelector } from '../selectors';

export function* mySagaGenericFilm(action) {
  const { payload, type } = action;
  const method = lodash.camelCase(type);
  const token = yield select(jwtSelector);
  const request = callMethods[method](payload, token);
  try {
    const response = yield request;
    const successType = action.type.replace('_REQUESTFORFILM', '_SUCCESS');
    console.log(successType);
    console.log(response);
    yield put({ type: successType, payload: response.data });
  } catch (err) {
    const failedType = action.type.replace('_REQUESTFORFILM', '_FAIL');
    yield put({ type: failedType, payload: err.response, err });
  }
}

export function* mySagaFilm(action) {
  yield takeEvery(({ type }) => /_REQUESTFORFILM$/g.test(type), mySagaGenericFilm);
  yield takeEvery('CREATE_COMMENTS_SUCCESS', callMethods.createCommentSuccess);
  yield takeEvery('CREATE_RATING_SUCCESS', callMethods.createRatingSuccess);
}
