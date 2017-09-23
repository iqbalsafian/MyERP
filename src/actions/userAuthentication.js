import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from './types';
import { apiServer } from './config';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function userLoginRequest(userData) {
  return dispatch => {
    return axios.post(
      apiServer + '/api/login',
      userData
    ).then((response) => {
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
      return {
        retStatus: true,
        errors: {}
      }
    }).catch((errors) => {
      return {
        retStatus: false,
        errors: errors.response.data
      }
    })
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}
