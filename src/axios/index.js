/* eslint-disable consistent-return */
import axios from 'axios';
import { loginUser, requestPosts, getFilms, getFilm, getComments, getRating } from '../actions';

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
