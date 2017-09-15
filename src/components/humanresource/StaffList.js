import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDisplayedStaff, getStaffById } from '../../actions/staffInformation';
import { Button, Dialog, Intent, Hotkey, Hotkeys, HotkeysTarget } from "@blueprintjs/core";
import StaffDetails from './StaffDetails';
import NewStaffForm from './NewStaffForm';
import Pagination from '../helpers/Pagination'

class StaffList extends Component {
  constructor(props) {
    super(props)
    this.props.setDisplayedStaff()
  }
  state = {
    isOpen: false,
    dialogTitle: 'New Staff',
    selectedStaffId: 0,
    selectedStaff: {},
    pageNum: 1
  }

  showStaffDetails = (staffId) => {
    const { id, firstname } = this.props.humanresource.staffList.results.find(staff => staff.id === staffId);
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

  componentWillReceiveProps(nextProps) {
    if (
      !(this.props.humanresource.staffList) ||
      JSON.stringify(this.props.humanresource.staffList.results[0].id) !== JSON.stringify(nextProps.humanresource.staffList.results[0].id)
    ) {
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
    const { staffList = {} } = this.props.humanresource;
    const { pagination = {} } = staffList;
    const { results = [] } = staffList;
    const { pageCount = 0 } = pagination;
    const theElements = []
    for(let i = 0; i < pageCount; i++) {
      theElements.push({linkTo: '/hr/page/' + (i+1), display: (i+1)})
    }

    return(
      <div style={{borderCollapse: 'collapse', display: 'table', position: 'relative', height: '71vh'}}>
        Staff List
        <div className="grid-container" style={{overflow:'auto'}}>
          {
            results ?
            results.map((staff, key) => {
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
        <div style={{paddingTop: '10px', width:'100%'}}>
          <Pagination theElements={theElements} reRender={this.reRender.bind(this)} />
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
        </Dialog>
      </div>
    )
  }
}

StaffList.PropTypes = {
  setDisplayedStaff: PropTypes.func.isRequired,
  humanresource: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    humanresource: state.humanresource
  }
}

HotkeysTarget(StaffList)
export default connect(mapStateToProps, { setDisplayedStaff })(StaffList);
