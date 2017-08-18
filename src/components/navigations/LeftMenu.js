import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Classes, Menu, MenuDivider } from "@blueprintjs/core";

class LeftMenu extends Component {
  showMenu(str) {
    alert('hola')
  }

  render() {
    return(
      <div className="pt-card pt-dark" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', height: '85vh'}}>
        <Menu className="pt-dark" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          <ul className="leftMenuUL pt-dark">
            <li>
            <NavLink to="/">
              <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
              Dashboard
            </NavLink>
            </li>
            <li>
            <NavLink to="/settings">
              <span className="leftMenuSpan pt-icon-standard pt-icon-cog" />
              Settings
            </NavLink>
            </li>
          </ul>
        </Menu>
        <Menu className={`docs-inline-example ${Classes.ELEVATION_1}`}>
            <MenuDivider title="Human Resource" />
            <ul>
              <li>
                <NavLink to="/hr">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Staff List
                </NavLink>
              </li>
              <li>
                <NavLink to="/hr/leave">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Leave Application
                </NavLink>
              </li>
              <li>
                <NavLink to="/hr/ab">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Allowance & Benefits
                </NavLink>
              </li>
              <li>
                <NavLink to="/hr/pa">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Pay Advice
                </NavLink>
              </li>
            </ul>
        </Menu>
        <Menu className={`docs-inline-example ${Classes.ELEVATION_1}`}>
          <MenuDivider title="Customer" />
          <NavLink to="/customer">
            <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
            Customer List
          </NavLink>
        </Menu>
        <Menu className={`docs-inline-example ${Classes.ELEVATION_1}`}>
          <MenuDivider title="Supplier" />
          <NavLink to="/supplier">
            <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
            Supplier List
          </NavLink>
        </Menu>
        <Menu className={`docs-inline-example ${Classes.ELEVATION_1}`}>
          <MenuDivider title="Operations" />
          <NavLink to="/operations">
            <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
            Operations
          </NavLink>
        </Menu>
        <Menu className={`docs-inline-example ${Classes.ELEVATION_1}`}>
          <MenuDivider title="Financial" />
          <NavLink to="/financial">
            <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
            Financial
          </NavLink>
        </Menu>
      </div>
    )
  }
}

export default LeftMenu;
