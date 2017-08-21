import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';

class PersonnelDetails extends Component {
  render(){
    var { staffDetails } = this.props
    return (
      <div className="grid-container pt-card transparentThis">
        <div className="grid-50">
          <div className="grid-container">
            <div className="grid-30" style={{verticalAlign:'middle'}}>First Name</div>
            <div className="grid-70">
              <input className="pt-input .pt-fill" type="text" placeholder="First Name" dir="auto"
                value={staffDetails.firstName} />
            </div>
          </div>
          <div className="grid-container">
            <div className="grid-30">Last Name</div>
            <div className="grid-70">
              <input className="pt-input .pt-fill" type="text" placeholder="Last Name"
                dir="auto"
                value={staffDetails.lastName} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class StaffDetails extends Component {
  componentWillMount() {
    const { selectedStaff } = this.props
    this.state = {
      staffDetails:  selectedStaff,
      selectedStaffId: selectedStaff.id
    }
  }

  handleSubmit() {}

  render() {
    return(
      <div className="transparentThis">
        <form onSubmit={this.handleSubmit}>
          <Tabs style={{paddingTop:'10px'}}>
            <TabList className="centeringText">
              <Tab>Personnel Details</Tab>
              <Tab>Roles</Tab>
              <Tab>Administration</Tab>
              <Tab>Financial</Tab>
            </TabList>
            <div style={{border:1, marginTop:'-10px'}}>
              <TabPanel>
                <PersonnelDetails staffDetails={this.state.staffDetails}  />
              </TabPanel>
              <TabPanel>
              </TabPanel>
              <TabPanel>
                <PersonnelDetails />
              </TabPanel>
              <TabPanel>
                asd
              </TabPanel>
            </div>
          </Tabs>
        </form>
      </div>
    )
  }
}

export default connect(null)(StaffDetails);
