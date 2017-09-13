import { combineReducers } from 'redux';
import auth from './reducers/auth';
import humanresource from './reducers/humanresource';

export default combineReducers({
  auth, humanresource
})
