import { createActions } from 'redux-actions';

// export const REQUEST_POSTS = 'REQUEST_POSTS';
// export const REQUEST_REGISTRATION_POSTS = 'REQUEST_REGISTRATION_POSTS';
// export const LOGIN_USER = 'LOGIN_USER';
// export const LOGOUT_USER = 'LOGOUT_USER';
// export const GET_FILMS = 'GET_FILMS';
// export const GET_FILM = 'GET_FILM';
// export const GET_COMMENTS = 'GET_COMMENTS';
// export const GET_RATING = 'GET_RATING';

export const { loginUser, logoutUser, requestPosts, requestRegisrtationPosts, getFilms, getFilm, getComments, getRating } = createActions({
  LOGIN_USER: data => ({ data }),
  LOGOUT_USER: () => ({}),
  REQUEST_POSTS: data => ({ data }),
  GET_FILMS: films => ({ films }),
  GET_FILM: film => ({ film }),
  GET_COMMENTS: comments => ({ comments }),
  GET_RATING: rating => ({ rating }),
});

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
