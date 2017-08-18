import { combineReducers } from 'redux';
import auth from './reducers/auth';
import staffList from './reducers/staff';

export default combineReducers({
  auth, staffList
})
