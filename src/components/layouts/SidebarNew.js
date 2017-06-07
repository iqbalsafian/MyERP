import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMenus } from './actions';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Menu from 'react-md/lib/Menus/Menu';
import ListItem from 'react-md/lib/Lists/ListItem';
import Divider from 'react-md/lib/Dividers';

class SidebarNew extends PureComponent {
  constructor() {
    super()
    this.state = {activeTab: 'dashboard'}
  }
  componentDidMount() {
    this.props.fetchMenus();
  }

  setActiveTab(activeTab) {
    this.setState = {
      activeTab
    }
  }

  render() {
    const noop = () => {};
    const { menus } = this.props;
    return(
      <aside className="al-sidebar">
        <ul className="al-sidebar-list">
          <Menu isOpen={true} style={{paddingLeft:'150px'}} className="transparentThis" id="static-1" onClose={noop}>
            <ListItem primaryText="Human Resource" />
            <ListItem primaryText="Redo" disabled />
            <Divider />
            <ListItem primaryText="Cut" disabled />
            <ListItem primaryText="Copy" disabled />
            <ListItem primaryText="Paste" />
          </Menu>
        </ul>
      </aside>
    )
  }
}

SidebarNew.propTypes = {
  menus: PropTypes.array.isRequired,
  fetchMenus: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    menus: state.menus
  }
}

export default connect(mapStateToProps, { fetchMenus })(SidebarNew);
