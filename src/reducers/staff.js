import { SET_SELECTED_STAFF } from '../actions/types';

const initialState = {
  staff: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SELECTED_STAFF: {
      return {user: action.user}
    }
    default: return state;
  }
}
