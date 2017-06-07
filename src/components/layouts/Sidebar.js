import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMenus } from './actions';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Sidebar extends Component {

  state = {
    activeTab: 'dashboard'
  }

  componentDidMount() {
    this.props.fetchMenus();
  }

  setActiveTab(menu) {
    this.setState({activeTab: menu});
  }

  setMenus(menus) {
    return (
      menus.map(
        (menu, key) => {
          const menuLink = '/' + menu.urlLink;
          return (
            <li className="al-sidebar-list-item" onClick={() => this.setActiveTab(menu.urlLink)}
             key={key}>
              <NavLink to={menuLink} className="al-sidebar-list-link">
                {menu.title}
              </NavLink>
              {
                menu.subMenus ?
                  <ul
                    className={
                      classnames('al-sidebar-list-item',
                      {activeTab: this.state.activeTab===menu.urlLink},
                      {deactiveTab: this.state.activeTab!==menu.urlLink})
                    }>
                    <div style={{paddingLeft:'10px'}}>{this.setMenus(menu.subMenus)}</div>
                  </ul>
                : ''
              }
            </li>
          )
        }
      )
    )
  }

  render() {
    const { menus } = this.props;
    return(
      <aside className="al-sidebar">
        <ul className="al-sidebar-list">
          {this.setMenus(menus)}
        </ul>
      </aside>
    )
  }
}

Sidebar.propTypes = {
  menus: PropTypes.array.isRequired,
  fetchMenus: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    menus: state.menus
  }
}

export default connect(mapStateToProps, { fetchMenus })(Sidebar);
