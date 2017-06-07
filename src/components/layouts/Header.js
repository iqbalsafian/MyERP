import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import TextField from 'react-md/lib/TextFields';
import FontIcon from 'react-md/lib/FontIcons';

class Header extends Component {
  render() {
    return(
      <div className="page-top">
        <NavLink to="dashboard" className="al-logo clearfix">
          <span>My</span>ERP
        </NavLink>
        <div className="search">
          <FontIcon>search</FontIcon>
          <input type="text" placeholder="Search for" className="whiteningText" />
        </div>
      </div>
    )
  }
}

export default Header;
