import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/userAuthentication';
// import { setDisplayedStaff } from './actions/staffInformation';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  // store.dispatch(setDisplayedStaff(localStorage.staffList));
}

// window.onbeforeunload = (e) => {
//   window.onunload = () => {
//     window.localStorage.removeItem('jwtToken');
//   }
//   return undefined();
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);
registerServiceWorker();
