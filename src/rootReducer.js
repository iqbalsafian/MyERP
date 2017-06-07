import { combineReducers } from 'redux';
import permissions from './reducers/permissions';
import menus from './reducers/menus';
import staff from './reducers/staff';

export default combineReducers({
  permissions, menus, staff
})
