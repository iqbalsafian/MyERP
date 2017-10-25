import React, { Component } from 'react';
// import { Button
//   Dialog, Intent, Hotkey, Hotkeys, HotkeysTarget
// } from "@blueprintjs/core";
import Graph from './dashboard/Graph';

export default class Dashboard extends Component {
  render() {
    return(
      <div style={{textAlign: 'center'}}>
        Dashboard
        <div className="grid-container">
          <div className="pt-card pt-elevation-4 transparentThis grid-30 card-padding pt-interactive" style={{margin:'10px 10px 0px 10px'}}>
            <div>Human Resource</div>
            <div>3 onleave</div>
            <div>2 claims</div>
          </div>
          <div className="pt-card pt-elevation-4 transparentThis grid-30 card-padding pt-interactive" style={{margin:'10px 10px 0px 10px'}}>
            <div>Customer</div>
            <div>3 new orders</div>
            <div>3 shipment</div>
          </div>
          <div className="pt-card pt-elevation-4 transparentThis grid-30 card-padding pt-interactive" style={{margin:'10px 10px 0px 10px'}}>
            <div>Supplier</div>
            <div>1 pending payment</div>
            <div>2 arrival</div>
          </div>
        </div>
        <div className="centeringText" style={{padding: '15px'}}>
          <Graph />
        </div>
      </div>
    )
  }
}
