import { combineReducers } from 'redux';
// import userAuthentication from './reducers/userAuthentication';
// import selectedStaff from './reducers/selectedStaff';
import auth from './reducers/auth';
import staff from './reducers/staff';

export default combineReducers({
  auth,
  staff
  // userAuthentication,
  // selectedStaff
})
