import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Dialog, Intent } from "@blueprintjs/core";
import StaffDetails from './StaffDetails';

class StaffList extends Component {
  state = {
    isOpen: false,
    dialogTitle: 'New Staff'
  }

  showStaffDetails = (staffId) => {
    const selectedStaff = this.props.staffList.staffList.find(staff => staff.id === staffId);
    this.setState({
      dialogTitle: 'Staff Details Information - ' + selectedStaff.firstName,
      isOpen: true
    })
  }

  newStaff() {
    this.setState({
      dialogTitle: 'New Staff',
      isOpen: true
    })
  }

  toggleOverlay = () => {
    this.setState({ isOpen: this.state.isOpen ? false : true })
  }

  render() {
    const { staffList } = this.props;
    return(
      <div>
        Staff List
        <Button iconName="plus" onClick={this.newStaff.bind(this)} />
        <div className="grid-container">
          {
            this.props.staffList.staffList.map((staff, key) => {
              return (
                <div key={key} onClick={() => this.showStaffDetails(staff.id)} className="pt-card pt-elevation-1 pt-interactive transparentThis grid-45" style={{margin:'10px 10px 0px 10px'}}>
                  <div className="grid-container">
                    <div className="grid-30">
                      <img src={require('../../images/REWmEe.jpg')} alt="" height="60" width="60" />
                    </div>
                    <div style={{textAlign:'left'}} className="grid-70">
                      <div>
                        Name: {staff.firstName}
                      </div>
                      <div>
                        Name: {staff.lastName}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <Dialog
          title={this.state.dialogTitle}
          className="pt-dark"
          isOpen={this.state.isOpen}
          onClose={this.toggleOverlay}
          style={{width:'800px'}}
          >
            <div className="pt-dialog-body">
              <StaffDetails selectedStaff={this.props.selectedStaffD} />
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
  staffList: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    staffList: state.staffList
  }
}

export default connect(mapStateToProps)(StaffList);
