import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Dialog, Intent } from "@blueprintjs/core";
import StaffDetails from './StaffDetails';

class StaffList extends Component {
  state = {
    isOpen: false
  }

  showStaffDetails(selectedStaff) {
    this.setState({ isOpen: true })
  }

  toggleOverlay = () => {
    this.setState({ isOpen: this.state.isOpen ? false : true })
  }

  render() {
    return(
      <div className="centeringText">
        Staff List
        <div className="grid-container centeringText">
          <div onClick={this.showStaffDetails.bind(this)} className="pt-card pt-elevation-1 pt-interactive transparentThis grid-45" style={{margin:'10px 10px 0px 10px'}}>
            <div className="grid-container">
              <div className="grid-30">
                <img src=".././REWmEe.jpg" alt="" height="70" width="70" />
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
          style={{width:'800px'}}
          >
            <div className="pt-dialog-body">
              <StaffDetails selectedStaff={this.props.selectedStaff} />
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

StaffList.propTypes = {
  selectedStaff: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    selectedStaff: state.selectedStaff
  }
}

export default connect(mapStateToProps)(StaffList);
