import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Classes, Dialog, Tooltip, Intent } from "@blueprintjs/core";

class StaffList extends Component {
  state = {
    isOpen: false
  }

  toggleOverlay = () => {
    this.setState({ isOpen: this.state.isOpen ? false : true })
  }

  render() {
    return(
      <div className="centeringText">
        Staff List
        <div className="grid-container centeringText" style={{padding:'0 10px'}}>
          <div onClick={this.toggleOverlay} className="pt-card pt-elevation-1 pt-interactive transparentThis grid-45" style={{margin:'10px 10px 0px 10px'}}>
            <div className="grid-container">
              {/* <NavLink to="/hr/staff-details"> */}
              <div className="grid-30">
                <img src=".././REWmEe.jpg" height="70" width="70" />
              </div>
              <div style={{textAlign:'left'}} className="grid-70">
                <div>
                  Name: Hola World
                </div>
                <div>
                  Name: Hola World
                </div>
              </div>
              {/* </NavLink> */}
            </div>
          </div>
          <div className="pt-card pt-elevation-1 transparentThis grid-45" style={{margin:'10px 10px 0px 10px'}}>
            <div className="grid-container">
              <div className="grid-30">
                <img src=".././REWmEe.jpg" height="70" width="70" />
              </div>
              <div style={{textAlign:'left'}} className="grid-70">
                <div>
                  Name: Hola World
                </div>
                <div>
                  Name: Hola World
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dialog
          title="Staff Details"
          className="pt-dark"
          isOpen={this.state.isOpen}
          onClose={this.toggleOverlay}
          >
            <div className="pt-dialog-body">
                Some content
            </div>
            <div className="pt-dialog-footer">
                <div className="pt-dialog-footer-actions">
                    <Button text="Secondary" />
                    <Button
                        intent={Intent.PRIMARY}
                        onClick={this.toggleOverlay}
                        text="Close"
                    />
                </div>
            </div>
          </Dialog>
      </div>
    )
  }
}

export default StaffList;
