/* eslint-disable consistent-return */
import { call, put, all, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  loginRequest,
  loginSuccess,
  loginFail,
  registerRequest,
  registerSuccess,
  registerFail,
  filmsRequest,
  getFilms,
  getFilmsFail,
  getFilmRequest,
  getFilmSuccess,
  getFail,
  createCommentRequest,
  getComments,
  getCommentFail,
  createRatingRequest,
  getRating,
  getRatingFail,
} from '../actions';

function axiosForLoginAndRegistration(url, data, method) {
  return axios({
    url,
    method,
    data: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

function axiosCreatePost(url, data, method, ownToken) {
  if (ownToken) {
    return axios({
      url,
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ownToken}`,
      },
      data: JSON.stringify(data),
    });
  }
}

function axiosGet(url, method, ownToken) {
  if (ownToken) {
    return axios({
      url,
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${ownToken}`,
      },
    });
  }
}

export function* axiosPosts(loginData) {
  try {
    const user = yield call(axiosForLoginAndRegistration, 'http://localhost:50740/api/user', loginData.payload, 'post');

    if (user.data.jwt !== null) {
      yield put(loginSuccess(user.data));
    }
  } catch (e) {
    yield put(loginFail(e));
  }
}

export function* axiosRegisterPosts(data) {
  try {
    const register = yield call(axiosForLoginAndRegistration, 'http://localhost:50740/api/registration', data.payload, 'post');
    yield put(registerSuccess(register.status));
  } catch (e) {
    yield put(registerFail(e));
  }
}

export function* getFilmsAxios(ownToken) {
  try {
    const films = yield call(axiosGet, 'http://localhost:50740/api/films', 'get', ownToken.payload);
    yield put(getFilms(films.data));
  } catch (e) {
    yield put(getFilmsFail(e));
  }
}

export function* getFilmAxios(data) {
  try {
    const [film, comments, ratings] = yield all([
      call(axiosGet, `http://localhost:50740/api/films/${data.payload.id}`, 'get', data.payload.jwt),
      call(axiosGet, `http://localhost:50740/api/comment/${data.payload.id}`, 'get', data.payload.jwt),
      call(axiosGet, `http://localhost:50740/api/rating/${data.payload.id}`, 'get', data.payload.jwt),
    ]);
    yield put(getFilmSuccess(film.data));
    yield put(getComments(comments.data));
    yield put(getRating(ratings.data));
  } catch (e) {
    yield put(getFail(e));
  }
}

export function* createCommentAxios(data) {
  try {
    yield call(axiosCreatePost, 'http://localhost:50740/api/comment', data.payload.data, 'post', data.payload.jwt);
    const allComments = yield call(axiosGet, `http://localhost:50740/api/comment/${data.payload.data.FilmId}`, 'get', data.payload.jwt);
    yield put(getComments(allComments.data));
  } catch (e) {
    yield put(getCommentFail(e));
  }
}

export function* createRatingAxios(data) {
  try {
    console.log(data);
    yield call(axiosCreatePost, 'http://localhost:50740/api/rating', data.payload.data, 'post', data.payload.jwt);
    const ratings = yield call(axiosGet, `http://localhost:50740/api/rating/${data.payload.data.FilmId}`, 'get', data.payload.jwt);
    yield put(getRating(ratings.data));
  } catch (e) {
    yield put(getRatingFail(e));
  }
}

export function* mySaga() {
  yield takeEvery(loginRequest, axiosPosts);
  yield takeEvery(filmsRequest, getFilmsAxios);
  yield takeEvery(getFilmRequest, getFilmAxios);
  yield takeEvery(registerRequest, axiosRegisterPosts);
  yield takeEvery(createCommentRequest, createCommentAxios);
  yield takeEvery(createRatingRequest, createRatingAxios);
}
// thunk
// export function getRaitingAxios(id, ownToken) {
//   return dispatch => {
//     return axiosGet(`http://localhost:50740/api/rating/${id}`, 'get', ownToken)
//       .then(response => {
//         dispatch(getRating(response.data));
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// }

// export function getCommentAxios(id, ownToken) {
//   return dispatch => {
//     return axiosGet(`http://localhost:50740/api/comment/${id}`, 'get', ownToken)
//       .then(response => {
//         dispatch(getComments(response.data));
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// }

// export function createCommentAxios(comment, id, ownToken) {
//   return async dispatch => {
//     await axiosCreatePost('http://localhost:50740/api/comment', comment, 'post', ownToken)
//       .then(resp => {
//         if (resp.status === 200) {
//           axiosGet(`http://localhost:50740/api/comment/${id}`, 'get', ownToken)
//             .then(response => {
//               dispatch(getComments(response.data));
//             })
//             .catch(error => {
//               throw error;
//             });
//         }
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// }

// export function createRatingAxios(comment, id, ownToken) {
//   return async dispatch => {
//     await axiosCreatePost('http://localhost:50740/api/rating', comment, 'post', ownToken)
//       .then(resp => {
//         if (resp.status === 200) {
//           axiosGet(`http://localhost:50740/api/rating/${id}`, 'get', ownToken)
//             .then(response => {
//               dispatch(getRating(response.data));
//             })
//             .catch(error => {
//               throw error;
//             });
//         }
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// }
