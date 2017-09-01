import React, { Component } from 'react';
import { Button, Dialog, Intent, Hotkey, Hotkeys, HotkeysTarget } from "@blueprintjs/core";

export default class CustomerList extends Component {
  render() {
    return(
      <div>
        Customer List
        <div>
          <input className="pt-input" type="search" placeholder="Search" dir="auto" style={{marginRight:'10px'}} />
          <Button text="Search" iconName="search" className="pt-intent-primary" />
        </div>
        <div className="grid-container" style={{overflow:'auto'}}>
          
        </div>
      </div>
    )
  }
}
