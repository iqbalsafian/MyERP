import axios from 'axios';

export default function userProfile(state = [], action = {}) {
  switch (action.type) {
    case 0:
      break;
    default:
      return state;
  }
}

export function userLoginRequest(userData) {
  return dispatch => {
    return axios.post(
      'http://localhost:3003/login',
      userData
    ).then((response) => {
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
