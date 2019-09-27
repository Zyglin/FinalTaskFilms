/* eslint-disable consistent-return */
import axios from 'axios';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const REQUEST_REGISTRATION_POSTS = 'REQUEST_REGISTRATION_POSTS';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const GET_FILMS = 'GET_FILMS';
export const GET_FILM = 'GET_FILM';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_RATING = 'GET_RATING';

export function loginUser(mail) {
  return {
    type: LOGIN_USER,
    payload: mail,
  };
}
export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export function requestPosts(data) {
  return {
    type: REQUEST_POSTS,
    data,
  };
}

export function requestRegisrtationPosts(data) {
  return {
    type: REQUEST_REGISTRATION_POSTS,
    data,
  };
}

export function getFilms(films) {
  return {
    type: GET_FILMS,
    payload: films,
  };
}

export function getFilm(film) {
  return {
    type: GET_FILM,
    payload: film,
  };
}

export function getComments(comments) {
  return {
    type: GET_COMMENTS,
    payload: comments,
  };
}

export function getRating(rating) {
  return {
    type: GET_RATING,
    payload: rating,
  };
}

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

export function axiosPosts(loginData, props) {
  return dispatch => {
    dispatch(requestPosts(loginData));
    return axiosForLoginAndRegistration('http://localhost:50740/api/user', loginData, 'post')
      .then(response => {
        if (response.data.jwt !== null) {
          dispatch(loginUser(response.data));
        }
      })
      .catch(error => {
        throw error;
      });
  };
}

export function getFilmsAxios(ownToken) {
  return dispatch => {
    return axiosGet('http://localhost:50740/api/films', 'get', ownToken)
      .then(response => {
        dispatch(getFilms(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function getFilmAxios(id, ownToken) {
  return dispatch => {
    return axiosGet(`http://localhost:50740/api/films/${id}`, 'get', ownToken)
      .then(response => {
        dispatch(getFilm(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function axiosRegisterPosts(data) {
  return dispatch => {
    dispatch(requestRegisrtationPosts(data));
    return axiosForLoginAndRegistration('http://localhost:50740/api/registration', data, 'post').catch(error => {
      throw error;
    });
  };
}

export function createCommentAxios(comment, id, ownToken) {
  return async dispatch => {
    await axiosCreatePost('http://localhost:50740/api/comment', comment, 'post', ownToken)
      .then(resp => {
        if (resp.status === 200) {
          axiosGet(`http://localhost:50740/api/comment/${id}`, 'get', ownToken)
            .then(response => {
              dispatch(getComments(response.data));
            })
            .catch(error => {
              throw error;
            });
        }
      })
      .catch(error => {
        throw error;
      });
  };
}

export function getCommentAxios(id, ownToken) {
  return dispatch => {
    return axiosGet(`http://localhost:50740/api/comment/${id}`, 'get', ownToken)
      .then(response => {
        dispatch(getComments(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function getRaitingAxios(id, ownToken) {
  return dispatch => {
    return axiosGet(`http://localhost:50740/api/rating/${id}`, 'get', ownToken)
      .then(response => {
        dispatch(getRating(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function createRatingAxios(comment, id, ownToken) {
  return async dispatch => {
    await axiosCreatePost('http://localhost:50740/api/rating', comment, 'post', ownToken)
      .then(resp => {
        if (resp.status === 200) {
          axiosGet(`http://localhost:50740/api/rating/${id}`, 'get', ownToken)
            .then(response => {
              dispatch(getRating(response.data));
            })
            .catch(error => {
              throw error;
            });
        }
      })
      .catch(error => {
        throw error;
      });
  };
}
