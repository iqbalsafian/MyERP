import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Accordion from 'react-responsive-accordion';
import Draggable from 'react-draggable';
import ComposeEmail from '../helpers/ComposeEmail'
// import classNames from 'classnames';

class LeftMenu extends Component {
  state = {
    displayEmail: 'none'
  }
  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };
  render() {
    return(
      <div className="transparentThis cursorPointer" style={{paddingTop:'15px', paddingLeft: '15px', height: '85vh'}}>
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
              <li>
                <NavLink to="/customer/quotation">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Quotation
                </NavLink>
              </li>
              <li>
                <NavLink to="/customer/po">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Purchase Order
                </NavLink>
              </li>
              <li>
                <NavLink to="/customer/do">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Delivery Order
                </NavLink>
              </li>
              <li>
                <NavLink to="/customer/invoice">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Invoice
                </NavLink>
              </li>
              <li>
                <NavLink to="/customer/invoice">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Pay Advice
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
          <div data-trigger="Accounting" className="pt-elevation-1">
            <ul style={{paddingBottom: '10px'}}>
              <li>
                <NavLink to="/accounting">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/accounting/cs">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Cash Statement
                </NavLink>
              </li>
              <li>
                <NavLink to="/accounting/bs">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Balance Sheet
                </NavLink>
              </li>
              <li>
                <NavLink to="/accounting/pnl">
                  <span className="leftMenuSpan pt-icon-standard pt-icon-home" />
                  Profit Loss Statement
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
            <li className="cursorPointer" onClick={() => this.setState({ displayEmail: 'block'})}>
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
          defaultPosition={{x: 100, y: -100}}
          position={null}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="pt-elevation-4 transparentThisDeeper" style={{width: '350px', height:'285px', position:'absolute', zIndex: '1000', display: this.state.displayEmail}}>
            <div className="handle centeringText" style={{cursor:'move', paddingTop:'10px'}}>Compose New Email
            </div>
            <ComposeEmail setToCancel={() => this.setState({displayEmail: 'none'}) } />
          </div>
        </Draggable>
      </div>
    )
  }
}

export default LeftMenu;
