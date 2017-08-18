import { SET_DISPLAYED_STAFF } from '../actions/types';

const initialState = {
  staffList: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DISPLAYED_STAFF: {
      return { staffList: action.staffList }
    }
    default: return state;
  }
}
