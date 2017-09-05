import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Accordion from 'react-responsive-accordion';
import Draggable from 'react-draggable';

class LeftMenu extends Component {
  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };
  render() {
    return(
      <div className="transparentThis" style={{paddingTop:'15px', paddingLeft: '15px', height: '85vh'}}>
        <Accordion>
          <div data-trigger="Human Resource">
            <ul style={{paddingBottom: '10px'}}>
              <NavLink to="/hr">
                <li tabIndex="1">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Staff List
                </li>
              </NavLink>
              <NavLink to="/hr/department">
                <li tabIndex="2">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Department
                </li>
              </NavLink>
              <NavLink to="/hr/leave">
                <li tabIndex="2">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Leave Application
                </li>
              </NavLink>
              <NavLink to="/hr/ab">
                <li tabIndex="3">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Allowance & Benefits
                </li>
              </NavLink>
              <NavLink to="/hr/pa">
                <li tabIndex="4">
                    <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                    Pay Advice
                </li>
              </NavLink>
            </ul>
          </div>
          <div data-trigger="Customer" className="pt-elevation-1">
            <ul style={{paddingBottom: '10px'}}>
              <li>
                <NavLink to="/customer">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Customer List
                </NavLink>
              </li>
            </ul>
          </div>
          <div data-trigger="Supplier" className="pt-elevation-1">
            <ul style={{paddingBottom: '10px'}}>
              <li>
                <NavLink to="/supplier">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Supplier List
                </NavLink>
              </li>
            </ul>
          </div>
        </Accordion>
        <div>
          <ul style={{paddingBottom: '10px'}}>
            <li>
              Email
            </li>
            <li>
              <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
              Compose
            </li>
            <li>
              <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
              Inbox
            </li>
            <li>
              <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
              Sent
            </li>
          </ul>
        </div>
        <Draggable
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div className="pt-elevation-4" style={{width: '250px', position:'absolute', zIndex: '1000'}}>
          <div className="handle centeringText">Compose New Email
          </div>
          <div>asd</div>
        </div></Draggable>
      </div>
    )
  }
}

export default LeftMenu;
