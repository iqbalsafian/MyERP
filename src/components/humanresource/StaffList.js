import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDisplayedStaff, getStaffById } from '../../actions/staffInformation';
import { Button, Dialog, Intent } from "@blueprintjs/core";
import StaffDetails from './StaffDetails';

class StaffList extends Component {
  constructor(props) {
    super(props)
    props.setDisplayedStaff()
  }
  state = {
    isOpen: false,
    dialogTitle: 'New Staff',
    selectedStaffId: 0,
    selectedStaff: {}
  }

  showStaffDetails = (staffId) => {
    const { id, firstName } = this.props.staffList.staffList.find(staff => staff.id === staffId);
    getStaffById(staffId)
      .then(response => {
        if (response.data[0])
        {
          this.setState({
            dialogTitle: 'Staff Details Information - ' + firstName,
            selectedStaffId: id,
            isOpen: true,
            selectedStaff: response.data[0]
          })
        }
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

  componentWillMount() {

  }

  render() {
    // console.log(this.props);
    const { staffList } = this.props.staffList;
    return(
      <div>
        Staff List
        <Button iconName="plus" onClick={this.newStaff.bind(this)} />
        <div className="grid-container">
          {
            staffList ?
            staffList.map((staff, key) => {
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
            :
            ''
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
              <StaffDetails selectedStaff={this.state.selectedStaff} />
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
  // staffList: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    staffList: state.staffList ? state.staffList : {}
  }
}

export default connect(mapStateToProps, { setDisplayedStaff })(StaffList);
