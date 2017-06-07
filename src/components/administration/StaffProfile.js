import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import Paper from 'react-md/lib/Papers';

class StaffProfile extends Component {
  state = {
    _id: this.props.staff._id,
    firstName: this.props.staff.firstName,
    lastName: this.props.staff.lastName,
    avatar: this.props.staff.avatar
  }
  render() {
    return(
      <div>
        <div className="centering-text">Staff Profile</div>
        <div>
          <Paper
            key={this.state._id}
            zDepth="5"
            raiseOnHover="false"
            className="paper-example"
          />
          First Name: {this.state.firstName}
          Last Name: {this.state.lastName}
          <div>
            <Avatar src={this.state.avatar} role="presentation" />
          </div>
        </div>
      </div>
    )
  }
}

StaffProfile.PropTypes = {
  _id: PropTypes.string.isRequired
}

function mapStateToProps(state, props) {
  if (props._id) {
    return {
      staff: state.staff.find(item => item._id === props._id)
    }
  }

  return { staff: null }
}

export default connect(mapStateToProps)(StaffProfile);
