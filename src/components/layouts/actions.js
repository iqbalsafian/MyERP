import axios from 'axios';

export const SET_MENUS = 'SET_MENUS';

export function setMenus(menus) {
  return {
    type: SET_MENUS,
    menus
  }
}

export function fetchMenus() {
  return dispatch => {
    axios.get('http://localhost:3003/api/erpmenus')
      .then((response) => {
        dispatch(setMenus(response.data.menus));
      });
  }

}
