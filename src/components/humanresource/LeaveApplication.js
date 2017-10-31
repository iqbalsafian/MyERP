import React, { Component } from 'react';
import { Dialog
  // , Button,  Intent, Hotkey, Hotkeys, HotkeysTarget 
} from "@blueprintjs/core";
import NewLeaveApplication from './NewLeaveApplication';
import LeaveApplicationDetails from './LeaveApplicationDetails';

class LeaveApplication extends Component {
  state = {
    openDialog: false,
    selectedLeave: 0,
    dialogTitle: 'New Leave'
  }

  toggleOverlay = () => {
    this.setState({
      openDialog: this.state.openDialog ? false : true,
      selectedLeave: this.state.selectedLeave ? 0 : -1
    })
  }

  openLeaveDialog (leaveId) {
    this.setState({ selectedLeave: leaveId })
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.selectedLeave !== this.state.selectedLeave)
      this.setState({ openDialog: this.state.selectedLeave ? true : false })
  }

  render() {
    const dataList = [
      {
        applicant: 'ALi',
        type: 'Sick',
        date_from: '20/12/2017',
        date_to: '21/12/2017',
        duration: '2 days',
        approved_by: 'Abu'
      },
      {
        applicant: 'Aki',
        type: 'Annual',
        date_from: '20/12/2017',
        date_to: '21/12/2017',
        duration: '2 days',
        approved_by: 'Abu'
      }
    ]

    return(
      <div>
        Leave Application
        <div className="grid-container" style={{minHeight:'400px', overflowY: 'auto'}}>
          <table width="100%" style={{marginTop:'10px'}}>
            <thead>
              <tr>
                <th>No</th>
                <th>Applicant</th>
                <th>Type</th>
                <th>From</th>
                <th>To</th>
                <th>Approved By</th>
              </tr>
            </thead>
            <tbody>
              {
                dataList.map((data, key) => {
                  return (
                    <tr key={key} className="bg-green" onClick={() => this.openLeaveDialog(key+1)}>
                      <td>{key+1}</td>
                      <td>{data.applicant}</td>
                      <td>{data.type}</td>
                      <td>{data.date_from}</td>
                      <td>{data.date_to}</td>
                      <td>{data.approved_by}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <Dialog
          title={this.state.dialogTitle}
          className="pt-dark"
          isOpen={this.state.openDialog}
          onClose={this.toggleOverlay}
          style={{width:'450px'}}
          >
            <div className="pt-dialog-body">
              {
                this.state.selectedLeave ?
                <LeaveApplicationDetails selectedLeave={this.state.selectedLeave} /> :
                <NewLeaveApplication />
              }
            </div>
        </Dialog>
      </div>
    )
  }
}

export default LeaveApplication;
