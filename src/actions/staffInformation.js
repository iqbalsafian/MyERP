import { SET_DISPLAYED_STAFF } from './types';
import axios from 'axios';

export function putDisplayedStaff(staffList) {
  return {
    type: SET_DISPLAYED_STAFF,
    staffList
  };
}

export function setDisplayedStaff() {
  return dispatch => {
    return axios.get('http://localhost:3003/api/staff')
      .then((response) => {
        localStorage.setItem("staffList", response.data)
        dispatch(putDisplayedStaff(response.data));
    })
  }
}
