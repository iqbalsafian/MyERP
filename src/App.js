import React, { Component } from 'react';
// import * as Blueprint from "@blueprintjs/core";
// import './App.css';

import TopNavigation from './components/navigations/TopNavigation';
import LeftMenu from './components/navigations/LeftMenu';
import LoginForm from './components/users/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
        {/* <TopNavigation />
        <LeftMenu /> */}
      </div>
    );
  }
}

export default App;
