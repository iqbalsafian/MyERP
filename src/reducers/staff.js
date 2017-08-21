import { SET_DISPLAYED_STAFF, SET_SELECTED_STAFF } from '../actions/types';

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_DISPLAYED_STAFF:
      // console.log(action.staffList);
      return {
        staffList: action.staffList
      }
    case SET_SELECTED_STAFF:
      // console.log(action.staff);
      return { selectedStaff: action.staff }
    default: return state;
  }
}
