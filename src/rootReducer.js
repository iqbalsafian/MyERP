import { combineReducers } from 'redux';
// import userAuthentication from './reducers/userAuthentication';
// import selectedStaff from './reducers/selectedStaff';
import auth from './reducers/auth';

export default combineReducers({
  auth
  // userAuthentication,
  // selectedStaff
})
