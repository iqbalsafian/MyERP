import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/userAuthentication';
import { setDisplayedStaff } from './actions/staffInformation';

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  store.dispatch(setDisplayedStaff(localStorage.staffList));
}
