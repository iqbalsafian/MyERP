import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDisplayedStaff, getStaffById } from '../../actions/staffInformation';
import { Button, Dialog, Intent, Hotkey, Hotkeys, HotkeysTarget } from "@blueprintjs/core";
import StaffDetails from './StaffDetails';
import NewStaffForm from './NewStaffForm';
import Pagination from 'rc-pagination';
import '../../pagination.css';

class StaffList extends Component {
  constructor(props) {
    super(props)
    props.setDisplayedStaff()
  }
  state = {
    isOpen: true,
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
      isOpen: true,
      selectedStaffId: 0
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
          <input className="pt-input" type="search" placeholder="Search" dir="auto" style={{marginRight:'10px'}} />
          <div className="pt-select" style={{paddingRight:'10px'}}>
            <select>
              <option selected>Choose department</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
            </select>
          </div>
          <Button text="Search" iconName="search" className="pt-intent-primary" />
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
        <div style={{paddingTop: '20px', paddingBottom: '15px'}}>
          <Pagination defaultCurrent={1}
            current={1}
            total={10}
            defaultPageSize={3}
            pageSize={3}
            className="centeringText centeringAlignment"
            style={{margin: 'auto', width:'230', paddingLeft:'10px'}}
          />
        </div>
        <div>
          <Button iconName="plus" text="Add New"
            className="pt-intent-primary"
            onClick={this.newStaff}/>
          <Button iconName="trash" text="Delete" className="pt-intent-warning" />
        </div>
        <Dialog
          title={this.state.dialogTitle}
          className="pt-dark"
          isOpen={this.state.isOpen}
          onClose={this.toggleOverlay}
          style={{width:'850px'}}
          >
            <div className="pt-dialog-body">
              {
                this.state.selectedStaffId ?
                <StaffDetails selectedStaff={this.state.selectedStaff} /> :
                <NewStaffForm />
              }

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
