import { takeEvery, all } from 'redux-saga/effects';
import lodash from 'lodash';
import * as callMethods from './callMethodsLogRegCreate';
import { mySagaFilm } from './GenericSagaforCurrentFilm';

export function* mySagaGeneric(action) {
  const { payload, type } = action;
  const methodName = lodash.camelCase(type);
  const request = callMethods[methodName](payload);
  yield request;
}

export function* mySagaAll(action) {
  yield takeEvery(({ type }) => /_REQUEST$/g.test(type), mySagaGeneric);
}

export function* rootSaga() {
  yield all([mySagaAll(), mySagaFilm()]);
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
