import { SET_STAFF } from '../components/administration/actions';

export default function staff(state = [], action = {}) {
  switch (action.type) {
    case SET_STAFF:
      return action.staff
    default:return state;
  }
}
