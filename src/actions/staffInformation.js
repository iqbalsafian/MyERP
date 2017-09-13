import { SET_DISPLAYED_STAFF } from './types';
import axios from 'axios';
const apiServer = 'http://localhost:3003';

export function putDisplayedStaff(staffList) {
  return {
    type: SET_DISPLAYED_STAFF,
    staffList
  };
}

export function setDisplayedStaff(pageNum = 1) {
  return dispatch => {
    return axios.get(apiServer + '/api/staff/' + pageNum)
      .then((response) => {
        localStorage.setItem("staffList", response.data)
        dispatch(putDisplayedStaff(response.data));
    })
  }
}

export function getStaffById(staffId) {
  return axios.get(apiServer + '/api/staffdetails/' + staffId)
}
