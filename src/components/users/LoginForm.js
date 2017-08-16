import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLoginRequest } from '../.././reducers/userProfile';
import { Button, Classes, Intent, Dialog } from "@blueprintjs/core";
import classNames from 'classnames';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isLoading: false,
    errors: []
  }

  style = {
    loginBody: {
      margin: 'auto',
      width: '400px',
      height: '300px',
      textAlign: 'center',
      transform: 'translate('+0+'%, '+30+'%)'
    },
    centeringAlignment: {
      margin: 'auto',
      transform: 'translate('+0+'%, '+5+'%)'
    }
  }

  onChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let errors = {}

    if (this.state.username === '') errors.username = "Username can't be empty";
    if (this.state.password === '') errors.password = "Password can't be empty";

    this.setState({ errors });
    const isValid = Object.keys(errors).length === 0

    //if (isValid) {
    this.props.userLoginRequest({
      username: this.state.username,
      password: this.state.password
    }).then((response) => {
      if (response.retStatus) {
        // console.log('ok');
      } else {
        this.setState({ errors: response.errors})
      }
    })
  }

  isValid() {
    return true;
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div style={this.style.loginBody} className="pt-ui-text">
          <div className="pt-card .pt-elevation-4 transparentThis">
            <div className="pt-form-group pt-inline">

              <div style={this.style.centeringAlignment}>
                <div style={{paddingBottom:'15px'}}>
                  MyERP
                </div>
                <div className={classNames('pt-input-group')}>
                  <input
                    id="username"
                    name="username"
                    className={classNames('pt-input', {'pt-intent-danger': !!this.state.errors.username})}
                    style={{width: '300px', textAlign: 'center'}}
                    type="text"
                    placeholder="Your username"
                    dir="auto"
                    onChange={this.onChange} />
                </div>
                <div className="pt-form-helper-text pt-intent-danger">
                  {
                    this.state.errors.username ? "username is required!" : ""
                  }
                </div>

                <div>&nbsp;</div>

                <div className="pt-input-group">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className={classNames('pt-input', {'pt-intent-danger': !!this.state.errors.password})}
                    style={{width: '300px', textAlign:'center'}}
                    placeholder="Your password"
                    dir="auto"
                    onChange={this.onChange} />
                </div>
                <div className="pt-form-helper-text pt-intent-danger">
                  {
                    this.state.errors.password ? "password is required!" : ""
                  }
                </div>

                <div>&nbsp;</div>
                <div className="pt-input-group" style={{paddingBottom:'20px', textAlign:'center'}}>
                  <Button
                    className='.pt-intent-primary'
                    text="Submit" onClick={this.handleSubmit} />

                </div>
              </div>
            </div>
          </div>
        </div>
        <Dialog
            iconName="inbox"
            isOpen={this.state.isLoading}
            onClose={() => this.setState({isLoading:false})}
            title="Dialog header"
        >
            <div className="pt-dialog-body">
                Some content
            </div>
            <div className="pt-dialog-footer">
                <div className="pt-dialog-footer-actions">
                    <Button text="Secondary" />
                    <Button
                        intent={Intent.PRIMARY}
                        onClick={() => this.setState({isLoading:false})}
                        text="Primary"
                    />
                </div>
            </div>
        </Dialog>
      </form>
    )
  }
}

LoginForm.propTypes = {
  userLoginRequest: PropTypes.func.isRequired
}

export default connect((state) => { return {}}, { userLoginRequest })(LoginForm);
