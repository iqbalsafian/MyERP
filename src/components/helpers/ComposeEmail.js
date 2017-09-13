import React, { Component } from 'react';
import { Button } from '@blueprintjs/core';

class ComposeEmail extends Component {
  render() {
    return(
      <div style={{padding: '10px'}}>
        <label className="pt-label">
          To
          <span className="pt-text-muted">(required)</span>
          <input className="pt-input pt-fill" type="text" placeholder="Receiver" dir="auto" />
        </label>
        <label className="pt-label">
          Message
          <span className="pt-text-muted">(required)</span>
          <textarea className="pt-input pt-fill" type="text" placeholder="Message" dir="auto" style={{height:'100px'}}></textarea>
        </label>
        <div>
          <Button iconName="pt-icon-send-to" text="Send" />
          <Button iconName="pt-icon-send-to" text="Cancel"
            onClick={(e) => {
              e.preventDefault();
              this.props.setToCancel()
            }}
          />
        </div>
      </div>
    )
  }
}

export default ComposeEmail;
