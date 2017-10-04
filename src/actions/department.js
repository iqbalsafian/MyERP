import { SET_DISPLAYED_DEPARTMENT} from './types';
import axios from 'axios';
import { apiServer } from './config';

export function putDisplayedDepartment(departmentList) {
  return {
    type: SET_DISPLAYED_DEPARTMENT,
    departmentList
  };
}

export function setDisplayedDepartment(pageNum = 1) {
  // console.log('here');
  return dispatch => {
    return axios.get(apiServer + '/api/department/' + pageNum)
      .then((response) => {
        localStorage.setItem("departmentList", response.data)
        dispatch(putDisplayedDepartment(response.data));
    })
  }
}

export function getDepartmentById(departmentId) {
  return axios.get(apiServer + '/api/departmentdetails/' + departmentId)
}
