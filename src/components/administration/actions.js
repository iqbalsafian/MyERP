import axios from 'axios';

export const SET_STAFF = 'SET_STAFF';

function setStaff(staff) {
  return {
    type: SET_STAFF,
    staff
  }
}

export function fetchStaff(startIndex = 0, limit = 8) {
  return dispatch => {
    axios.get(`http://localhost:3003/api/users/${startIndex}/${limit}`)
      .then((response) => {
        dispatch(setStaff(response.data.users))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
