import { SET_MENUS } from '../components/layouts/actions'

export default function menus(state = [], action = {}) {
  switch (action.type) {
    case SET_MENUS:
      return action.menus;
    default: return state;
  }
}
