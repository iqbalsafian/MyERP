import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLoginRequest } from '../../actions/userAuthentication';
// import { setDisplayedStaff } from '../../actions/staffInformation';
import { Button, Intent, Dialog } from "@blueprintjs/core";
import classNames from 'classnames';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    isLoading: false,
    errors: [],
    disabledSubmit: false
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
    this.setState({ disabledSubmit: true });
    let errors = {}

    if (this.state.email === '') errors.email = "Email can't be empty";
    if (this.state.password === '') errors.password = "Password can't be empty";

    this.setState({ errors });

    this.props.userLoginRequest({
      email: this.state.email,
      password: this.state.password
    }).then((response) => {
      // this.props.setDisplayedStaff();
      // console.log(response);
      if (!response.retStatus) {
        this.setState({ errors: response.errors})
      }
    })
    this.setState({ disabledSubmit: false });
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
                <div className="pt-callout pt-intent-primary">
                  For demo purposes please use Ezekiel.Botsford73@hotmail.com as email and password as password.
                </div>
                <br />
                <div className={classNames('pt-input-group')}>
                  <input
                    id="email"
                    name="email"
                    className={classNames('pt-input', {'pt-intent-danger': !!this.state.errors.email})}
                    style={{width: '300px', textAlign: 'center'}}
                    type="text"
                    placeholder="Your email"
                    dir="auto"
                    onChange={this.onChange}
                   />
                </div>
                <div className="pt-form-helper-text pt-intent-danger red-color">
                  {
                    this.state.errors.email ? <div className="pt-callout pt-intent-danger defaultTextColor">Email is required!</div> : ""
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
                <div className="pt-form-helper-text pt-intent-danger red-color">
                  {
                    this.state.errors.password ? <div className="pt-callout pt-intent-danger defaultTextColor">Password is required!</div> : ""
                  }
                </div>
                <div className="pt-form-helper-text pt-intent-danger red-color">
                  {
                    this.state.errors.errors ? <div className="pt-callout pt-intent-danger defaultTextColor">{this.state.errors.errors}</div> : ''
                  }
                </div>
                <div>&nbsp;</div>
                <div className="pt-input-group" style={{paddingBottom:'20px', textAlign:'center'}}>
                  <Button
                    className={classNames('.pt-intent-primary', {'pt-disabled': this.state.disabledSubmit})}
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
  userLoginRequest: PropTypes.func.isRequired,
  reRender: PropTypes.func.isRequired
}

export default connect((state) => { return {}}, { userLoginRequest })(LoginForm);
