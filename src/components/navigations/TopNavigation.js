import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/userAuthentication';
import { Popover, PopoverInteractionKind, Menu, MenuItem, Position, MenuDivider
  // ,Button 
} from "@blueprintjs/core";
import { NavLink } from 'react-router-dom';

class TopNavigation extends Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.reRender();
  }

  showSettingMenu() {
    const compassMenu = (
        <Menu>
            <MenuItem iconName="graph" text="Graph" />
            <MenuItem iconName="map" text="Map" />
            <MenuItem iconName="th" text="Table" shouldDismissPopover={false} />
            <MenuItem iconName="zoom-to-fit" text="Nucleus" disabled={true} />
            <MenuDivider />
            <MenuItem iconName="cog" text="Settings...">
                <MenuItem iconName="add" text="Add new application" disabled={true} />
                <MenuItem iconName="remove" text="Remove application" />
            </MenuItem>
        </Menu>
    );
    return (
      <Popover
        content={compassMenu} position={Position.BOTTOM_RIGHT}
        interactionKind={PopoverInteractionKind.HOVER}>
        <button className="pt-button pt-minimal pt-icon-cog" onClick=""></button>
      </Popover>
    )
  }

  showProfileMenu() {
    const compassMenu = (
        <Menu>
            <MenuItem iconName="user" text="My Profile" />
            <MenuItem iconName="pt-icon-key" text="Change Password" />
        </Menu>
    );
    return (
      <Popover
        content={compassMenu} position={Position.BOTTOM_RIGHT}
        interactionKind={PopoverInteractionKind.HOVER}>
        <button className="pt-button pt-minimal pt-icon-user"></button>
      </Popover>
    )
  }

  enterSearchMode() {
    alert('You press enter!');
  }

  checkEnterKey(e) {
    if (e.keyCode === 13) {
      this.enterSearchMode();
    }
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
                <input className="pt-input" type="search" onKeyDown={this.checkEnterKey} placeholder="Search" dir="auto" size="25" />
                <span className="pt-icon pt-icon-search" style={{cursor:'pointer'}} onClick={this.enterSearchMode}></span>
              </div>
            </div>
            <div className="pt-navbar-group pt-align-right">
              <span className="pt-navbar-divider"></span>
              {/* <button className="pt-button pt-minimal pt-icon-user"></button> */}
              {this.showProfileMenu()}
              <button className="pt-button pt-minimal pt-icon-notifications"></button>
              {this.showSettingMenu()}
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
