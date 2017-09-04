import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDisplayedStaff, getStaffById } from '../../actions/staffInformation';
import { Button, Dialog, Intent, Hotkey, Hotkeys, HotkeysTarget } from "@blueprintjs/core";
import StaffDetails from './StaffDetails';
import NewStaffForm from './NewStaffForm';
import Pagination from '../helpers/Pagination'

class StaffList extends Component {
  state = {
    isOpen: false,
    dialogTitle: 'New Staff',
    selectedStaffId: 0,
    selectedStaff: {},
    pageNum: 1
  }

  showStaffDetails = (staffId) => {
    const { id, firstname } = this.props.staffList.staffList.results.find(staff => staff.id === staffId);
    getStaffById(staffId)
      .then(response => {
        if (response.data)
        {
          this.setState({
            dialogTitle: 'Staff Details Information - ' + firstname,
            selectedStaffId: id,
            isOpen: true,
            selectedStaff: response.data
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
    this.props.setDisplayedStaff()
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.staffList.staffList.results[0].id) !== JSON.stringify(nextProps.staffList.staffList.results[0].id)) {
      this.render()
    }
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

  reRender(fromChild) {
    this.props.setDisplayedStaff(fromChild);
  }

  render() {
    const { staffList } = this.props.staffList;
    const theElements = []
    for(let i = 0; i < staffList.pagination.pageCount; i++) {
      theElements.push({linkTo: '/hr/page/' + (i+1), display: (i+1)})
    }

    return(
      <div>
        Staff List
        <div>
          <input className="pt-input" type="search" placeholder="Search" dir="auto" style={{marginRight:'10px'}} />
          <div className="pt-select pt-intent-primary" style={{paddingRight:'10px'}}>
            <select>
              <option defaultValue>Choose department</option>
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
            staffList.results.map((staff, key) => {
              return (
                <div key={key} onClick={() => this.showStaffDetails(staff.id)} className="pt-card pt-elevation-1 pt-interactive transparentThis grid-30 grid-container card-padding" style={{margin:'10px 10px 0px 10px'}}>
                  <div className="grid-30">
                    <img src={require('../../images/REWmEe.jpg')} alt="" height="40" width="40" />
                  </div>
                  <div style={{textAlign:'left'}} className="grid-70">
                    <div>
                      {staff.fullname.slice(0, 15)}
                    </div>
                    <div>{staff.designation.slice(0, 15)}</div>
                  </div>
                </div>
              )
            })
            :
            ''
          }
        </div>
        <div style={{paddingTop: '20px', paddingBottom: '15px'}}>
          <Pagination theElements={theElements} reRender={this.reRender.bind(this)} />
        </div>
        <div>
          <Button iconName="plus" text="Add New"
            className="pt-intent-primary"
            onClick={this.newStaff}/>
          <Button iconName="trash" text="Delete" className="pt-intent-primary" />
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
  staffList: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    staffList: state.staffList
  }
}
HotkeysTarget(StaffList)
export default connect(mapStateToProps, { setDisplayedStaff })(StaffList);
