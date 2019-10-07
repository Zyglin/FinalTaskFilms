import { createAction } from 'redux-actions';

// export const REQUEST_POSTS = 'REQUEST_POSTS';
// export const REQUEST_REGISTRATION_POSTS = 'REQUEST_REGISTRATION_POSTS';
// export const LOGIN_USER = 'LOGIN_USER';
// export const LOGOUT_USER = 'LOGOUT_USER';
// export const GET_FILMS = 'GET_FILMS';
// export const GET_FILM = 'GET_FILM';
// export const GET_COMMENTS = 'GET_COMMENTS';
// export const GET_RATING = 'GET_RATING';

export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFail = createAction('LOGIN_FAIL');
export const logOut = createAction('LOGOUT_USER');
export const registerRequest = createAction('REGISTER_REQUEST');
export const registerSuccess = createAction('REGISTER_SUCCESS');
export const registerFail = createAction('REGISTER_FAIL');
export const filmsRequest = createAction('FILMS_REQUESTFORFILM');
export const getFilms = createAction('FILMS_SUCCESS');
export const getFilmsFail = createAction('FILMS_FAIL');
export const filmRequest = createAction('FILM_REQUESTFORFILM');
export const getFilmSuccess = createAction('FILM_SUCCESS');
export const getFail = createAction('FILM_FAIL');
export const getComments = createAction('COMMENTS_REQUESTFORFILM');
export const createCommentRequest = createAction('CREATE_COMMENTS_REQUESTFORFILM');
export const createCommentSuccess = createAction('CREATE_COMMENTS_SUCCESS');
export const getCommentsSuccess = createAction('COMMENTS_SUCCESS');
export const getCommentFail = createAction('COMMENTS_FAIL');
export const getRatings = createAction('RATING_REQUESTFORFILM');
export const createRatingRequest = createAction('CREATE_RATING_REQUESTFORFILM');
export const getRatingSuccess = createAction('RATING_SUCCESS');
export const getRatingFail = createAction('RATNG_FAIL');
export const editUserRequest = createAction('EDIT_USER_REQUESTFORFILM');
export const editUserSuccess = createAction('EDIT_USER_SUCCESS');
export const editUserFail = createAction('EDIT_USER_FAIL');

// export const { logoutUser, requestPosts } = createActions({
//   LOGOUT_USER: () => ({}),
// });

// export function loginUser(mail) {
//   return {
//     type: LOGIN_USER,
//     payload: mail,
//   };
// }
// export function logoutUser() {
//   return {
//     type: LOGOUT_USER,
//   };
// }

// export function requestPosts(data) {
//   return {
//     type: REQUEST_POSTS,
//     data,
//   };
// }

// export function requestRegisrtationPosts(data) {
//   return {
//     type: REQUEST_REGISTRATION_POSTS,
//     data,
//   };
// }

// export function getFilms(films) {
//   return {
//     type: GET_FILMS,
//     payload: films,
//   };
// }

// export function getFilm(film) {
//   return {
//     type: GET_FILM,
//     payload: film,
//   };
// }

// export function getComments(comments) {
//   return {
//     type: GET_COMMENTS,
//     payload: comments,
//   };
// }

// export function getRating(rating) {
//   return {
//     type: GET_RATING,
//     payload: rating,
//   };
// }
