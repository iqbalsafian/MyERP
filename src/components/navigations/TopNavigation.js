import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/userAuthentication';
import { Popover, PopoverInteractionKind, Menu, MenuItem } from "@blueprintjs/core";
import { NavLink } from 'react-router-dom';

class TopNavigation extends Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.reRender();
  }

  showMenu() {
    return (
      <Menu>
        <MenuItem text="Profile"></MenuItem>
        <MenuItem text="User Roles"></MenuItem>
      </Menu>
    )
  }

  render() {
    return (
      <div style={{ paddingTop: '17px'}}>
        <nav className="pt-navbar pt-dark" style={{backgroundColor:'rgba(0,0,0,0.2)'}}>
          <div style={{margin: '0 auto', width: 480+'px', align: 'center'}}>
            <div className="pt-navbar-group pt-align-left">
              <div className="pt-navbar-heading">
                <NavLink to={'/'}>
                  MyERP
                </NavLink>
              </div>
              <div className="pt-input-group">
                <input className="pt-input" type="search" placeholder="Search input" dir="auto" />
                <span className="pt-icon pt-icon-search" style={{cursor:'pointer'}}></span>
              </div>
            </div>
            <div className="pt-navbar-group pt-align-right">
              <span className="pt-navbar-divider"></span>
              <button className="pt-button pt-minimal pt-icon-user"></button>
              <button className="pt-button pt-minimal pt-icon-notifications"></button>
              <Popover
                content={this.showMenu}
                interactionKind={PopoverInteractionKind.HOVER}>
                <button className="pt-button pt-minimal pt-icon-cog" onClick=""></button>
              </Popover>
              <Popover
                content="Logout"
                interactionKind={PopoverInteractionKind.HOVER}>
                <button className="pt-button pt-minimal pt-icon-log-out" onClick={this.logout.bind(this)}></button>
              </Popover>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

TopNavigation.propTypes = {
  logout: PropTypes.func.isRequired,
  reRender: PropTypes.func.isRequired
}

export default connect((state) => { return {} }, {logout})(TopNavigation);
