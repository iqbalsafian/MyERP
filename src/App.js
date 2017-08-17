import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.css';
import './unsemantic-grid-responsive.css';
import TopNavigation from './components/navigations/TopNavigation';
import LeftMenu from './components/navigations/LeftMenu';
import MainContent from './components/navigations/MainContent';
import RightMenu from './components/navigations/RightMenu';
import LoginForm from './components/users/LoginForm';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  reRender = () => {
    this.render();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const authenticatedUserLinks = (
      <div>
        <div className="grid-container">
          <div className="grid-100">
            <TopNavigation reRender={() => this.reRender.bind(this)} />
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
    )
    return (
      <div>
        <BrowserRouter>
        { isAuthenticated ? authenticatedUserLinks : <LoginForm reRender={() => this.reRender} /> }
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App);
