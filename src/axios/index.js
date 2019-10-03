/* eslint-disable consistent-return */
import axios from 'axios';

export function axiosForLoginAndRegistration(url, data, method) {
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

export function axiosCreatePost(url, data, method, ownToken) {
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

export function axiosGet(url, method, ownToken) {
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
