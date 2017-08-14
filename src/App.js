import React, { Component } from 'react';
// import * as Blueprint from "@blueprintjs/core";
// import './App.css';
import './unsemantic-grid-responsive.css'

import TopNavigation from './components/navigations/TopNavigation';
import LeftMenu from './components/navigations/LeftMenu';
import MainContent from './components/navigations/MainContent';
import RightMenu from './components/navigations/RightMenu';
import LoginForm from './components/users/LoginForm';

class App extends Component {
  render() {
    return (
      <div>
        {/* <LoginForm /> */}
        <div className="grid-container">
          <div className="grid-100">
            <TopNavigation />
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-20">
            <LeftMenu />
          </div>
          <div className="grid-60">
            <MainContent />
          </div>
          <div className="grid-20">
            <RightMenu />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
