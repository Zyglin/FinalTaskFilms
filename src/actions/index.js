/* eslint-disable consistent-return */
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const REQUEST_REGISTRATION_POSTS = 'REQUEST_REGISTRATION_POSTS';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const GET_FILMS = 'GET_FILMS';
export const GET_FILM = 'GET_FILM';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const GET_COMMENTS = 'GET_COMMENTS';
export const CREATE_RATING = 'CREATE_RATING';
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

export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit,
  };
}

export function requestRegisrtationPosts(subreddit) {
  return {
    type: REQUEST_REGISTRATION_POSTS,
    subreddit,
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

export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    payload: comment,
  };
}

export function getRating(rating) {
  return {
    type: GET_RATING,
    payload: rating,
  };
}

export function createRating(rating) {
  return {
    type: CREATE_RATING,
    payload: rating,
  };
}

export function fetchPosts(subreddit, props) {
  return dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch('http://localhost:50740/api/user', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(subreddit),
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.jwt === null) {
          console.log(data);
        } else {
          console.log(data.jwt);
          localStorage.setItem('token', data.jwt);
          localStorage.setItem('currentUser', data.user);
          dispatch(loginUser(data.user));
        }
      });
  };
}

export function getFilmsFetch() {
  return dispatch => {
    const ownToken = localStorage.token;
    if (ownToken) {
      return fetch('http://localhost:50740/api/films', {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ownToken}`,
        },
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          dispatch(getFilms(data));
        });
    }
  };
}

export function getFilmFetch(id) {
  console.log(id);
  return dispatch => {
    const ownToken = localStorage.token;
    if (ownToken) {
      return fetch(`http://localhost:50740/api/films/${id}`, {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ownToken}`,
        },
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          dispatch(getFilm(data));
        });
    }
  };
}

export function fetchRegisterPosts(subreddit) {
  return dispatch => {
    dispatch(requestRegisrtationPosts(subreddit));
    return fetch('http://localhost:50740/api/registration', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(subreddit),
    });
  };
}

export function createCommentFetch(comment, id) {
  return async dispatch => {
    const ownToken = localStorage.token;
    if (ownToken) {
      await fetch('http://localhost:50740/api/comment', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ownToken}`,
        },
        body: JSON.stringify(comment),
      })
        .then(resp => {
          if (resp.ok) {
            fetch(`http://localhost:50740/api/comment/${id}`, {
              method: 'get',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${ownToken}`,
              },
            })
              .then(response => response.json())
              .then(data => {
                dispatch(getComments(data));
              });
          }
        })
        .then(data => {
          dispatch(createComment(data));
        });
    }
  };
}

export function getCommentFetch(id) {
  return dispatch => {
    const ownToken = localStorage.token;
    if (ownToken) {
      return fetch(`http://localhost:50740/api/comment/${id}`, {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ownToken}`,
        },
      })
        .then(resp => resp.json())
        .then(data => {
          dispatch(getComments(data));
        });
    }
  };
}

export function getRaitingFetch(id) {
  return dispatch => {
    const ownToken = localStorage.token;
    if (ownToken) {
      return fetch(`http://localhost:50740/api/rating/${id}`, {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ownToken}`,
        },
      })
        .then(resp => resp.json())
        .then(data => {
          dispatch(getRating(data));
        });
    }
  };
}

export function createRatingFetch(comment, id) {
  return async dispatch => {
    const ownToken = localStorage.token;
    if (ownToken) {
      await fetch('http://localhost:50740/api/rating', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ownToken}`,
        },
        body: JSON.stringify(comment),
      })
        .then(resp => {
          if (resp.ok) {
            fetch(`http://localhost:50740/api/rating/${id}`, {
              method: 'get',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${ownToken}`,
              },
            })
              .then(response => response.json())
              .then(data => {
                dispatch(getRating(data));
              });
          }
        })
        .then(data => dispatch(createRating(data)));
    }
  };
}
