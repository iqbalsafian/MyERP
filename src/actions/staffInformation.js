import { SET_SELECTED_STAFF } from './types';

export function setSelectStaff(staff) {
  return {
    type: SET_SELECTED_STAFF,
    staff
  }
}

export function selectedStaff(staff) {
  return dispatch => {
    dispatch(setSelectStaff({}));
  }
}

export function selectedStaffD(staff) {
  return {};
}
