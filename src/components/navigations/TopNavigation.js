import React, { Component } from 'react';

export default class TopNavigation extends Component {
  render() {
    return (
      <div>
        <nav className="pt-navbar pt-dark">
          <div style={{margin: '0 auto', width: 480+'px', align: 'center'}}>
            <div className="pt-navbar-group pt-align-left">
              <div className="pt-navbar-heading">MyERP</div>
            </div>
            <div className="pt-navbar-group pt-align-right">
              <button className="pt-button pt-minimal pt-icon-home">Home</button>
              <button className="pt-button pt-minimal pt-icon-document">Files</button>
              <span className="pt-navbar-divider"></span>
              <button className="pt-button pt-minimal pt-icon-user"></button>
              <button className="pt-button pt-minimal pt-icon-notifications"></button>
              <button className="pt-button pt-minimal pt-icon-cog"></button>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
