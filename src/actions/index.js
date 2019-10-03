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
export const filmsRequest = createAction('FILMS_REQUEST');
export const getFilms = createAction('GET_FILMS');
export const getFilmsFail = createAction('GET_FILMSFAIL');
export const filmRequest = createAction('FILM_REQUEST');
export const getFilmSuccess = createAction('GET_FILM');
export const getFail = createAction('GET_FAIL');
export const createCommentRequest = createAction('CREATE_COMMENT_REQUEST');
export const getComments = createAction('GET_COMMENTS');
export const getCommentFail = createAction('GET_COMMENT_FAIL');
export const createRatingRequest = createAction('CREATE_RATING_REQUEST');
export const getRating = createAction('GET_RATING');
export const getRatingFail = createAction('GET_RATNG_FAIL');

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
