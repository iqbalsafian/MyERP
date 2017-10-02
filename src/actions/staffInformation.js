import { SET_DISPLAYED_STAFF } from './types';
import axios from 'axios';
import { apiServer } from './config';

export function putDisplayedStaff(staffList) {
  return {
    type: SET_DISPLAYED_STAFF,
    staffList
  };
}

export function setDisplayedStaff(pageNum = 0) {
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
