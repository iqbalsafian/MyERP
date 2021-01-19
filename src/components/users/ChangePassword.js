import React, { Component } from 'react';

class ChangePassword extends Component {
  state = {
    dialogTitle: 'Change Password',
    isOpen: false
  }
  
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return(
      <div>

      </div>
    )
  }
}

export default ChangePassword;
