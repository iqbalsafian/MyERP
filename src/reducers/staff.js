import {
  SET_DISPLAYED_STAFF,
  SET_SELECTED_STAFF,
  SET_DISPLAYED_DEPARTMENT
}
from '../actions/types';

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_DISPLAYED_STAFF:
      return {
        staffList: action.staffList
      }
    case SET_SELECTED_STAFF:
      return {
        selectedStaff: action.staff
      }
    case SET_DISPLAYED_DEPARTMENT:
      return {
        departmentList: action.departmentList
      }
    default: return state;
  }
}
