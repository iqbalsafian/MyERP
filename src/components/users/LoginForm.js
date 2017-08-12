import React, { Component } from 'react';
import { Button, Classes, Intent, Dialog } from "@blueprintjs/core";
import classNames from 'classnames';

class LoginForm extends Component {
  state = {
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

  handleSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading:true })
    }
  }

  isValid() {
    return true;
  }

  render() {

    return(
      <div >
        <div style={this.style.loginBody} className=".pt-ui-text">
          <div className="pt-card .pt-elevation-4">
            <div className="pt-form-group pt-inline">

              <div style={this.style.centeringAlignment}>
                <div style={{paddingBottom:'15px'}}>
                  MyERP
                </div>
                <div className={classNames('pt-input-group')}>
                  <input id="username" name="username" className="pt-input" style={{width: '300px', textAlign: 'center'}} type="text" placeholder="Your username" dir="auto" />
                </div>
                <div className="pt-form-helper-text">use iqbal as username</div>

                <div>&nbsp;</div>

                <div className="pt-input-group">
                  <input id="password" name="password" className="pt-input" style={{width: '300px', textAlign:'center'}} type="text" placeholder="Your password" dir="auto" />
                </div>
                <div className="pt-form-helper-text">enter password as password</div>

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
      </div>
    )
  }
}

export default LoginForm;
