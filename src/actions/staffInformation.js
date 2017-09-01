import { SET_DISPLAYED_STAFF } from './types';
import axios from 'axios';

export function putDisplayedStaff(staffList) {
  // console.log(staffList);
  return {
    type: SET_DISPLAYED_STAFF,
    staffList
  };
}

export function setDisplayedStaff() {
  return dispatch => {
    return axios.get('http://localhost:3003/api/staff/page/1')
      .then((response) => {
        localStorage.setItem("staffList", response.data)
        dispatch(putDisplayedStaff(response.data));
    })
  }
}

export function getStaffById(staffId) {
  return axios.get('http://localhost:3003/api/staff/' + staffId)
}
