import { takeEvery } from 'redux-saga/effects';
import lodash from 'lodash';
import * as callMethods from './callMethods';

export function* mySagaGeneric(action) {
  const { payload, type } = action;
  const methodName = lodash.camelCase(type);
  const request = callMethods[methodName](payload);
  yield request;
}

export function* mySaga(action) {
  yield takeEvery(({ type }) => /_REQUEST$/g.test(type), mySagaGeneric);
  // yield takeEvery(loginRequest, axiosPosts);
  // yield takeEvery(filmsRequest, getFilmsAxios);
  // yield takeEvery(getFilmRequest, getFilmAxios);
  // yield takeEvery(registerRequest, axiosRegisterPosts);
  // yield takeEvery(createCommentRequest, createCommentAxios);
  // yield takeEvery(createRatingRequest, createRatingAxios);
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
