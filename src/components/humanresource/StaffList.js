import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDisplayedStaff, getStaffById } from '../../actions/staffInformation';
import { Button, Dialog, Intent, Hotkey, Hotkeys, HotkeysTarget } from "@blueprintjs/core";
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

  newStaff = () => {
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

  renderHotkeys() {
    return <Hotkeys>
      <Hotkey
        global={true}
        combo="mod + b"
        label="New Staff"
        onKeyDown={this.newStaff}
      />
    </Hotkeys>
  }

  render() {
    // console.log(this.props);
    const { staffList } = this.props.staffList;
    return(
      <div>
        Staff List
        <div>
          <input className="pt-input" type="search" placeholder="Search" dir="auto" style={{marginRight:'15px'}} />
          <select name="department" id="department" style={{marginRight:'15px'}}>
            <option value="0">Select department</option>
          </select>
          <Button text="Search" />
        </div>
        <div className="grid-container" style={{overflow:'auto'}}>
          {
            staffList ?
            staffList.map((staff, key) => {
              return (
                <div key={key} onClick={() => this.showStaffDetails(staff.id)} className="pt-card pt-elevation-1 pt-interactive transparentThis grid-30 grid-container card-padding" style={{margin:'10px 10px 0px 10px'}}>
                  <div className="grid-30">
                    <img src={require('../../images/REWmEe.jpg')} alt="" height="40" width="40" />
                  </div>
                  <div style={{textAlign:'left'}} className="grid-70">
                    <div>
                      {staff.firstName} {staff.lastName}
                    </div>

                  </div>
                  <div>Software Developer</div>
                </div>
              )
            })
            :
            ''
          }
        </div>
        <div>
          <Button iconName="plus" text="Add New" />
          <Button iconName="plus" text="Delete" />
        </div>
        <Dialog
          title={this.state.dialogTitle}
          className="pt-dark"
          isOpen={this.state.isOpen}
          onClose={this.toggleOverlay}
          style={{width:'850px'}}
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
HotkeysTarget(StaffList)
export default connect(mapStateToProps, { setDisplayedStaff })(StaffList);
