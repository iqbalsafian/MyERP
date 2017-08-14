import { combineReducers } from 'redux';
import userProfile from './reducers/userProfile';
import selectedStaff from './reducers/selectedStaff';

export default combineReducers({
  userProfile, selectedStaff
})
