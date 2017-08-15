import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function PersonnelDetails() {
  return (
    <div className="grid-container pt-card transparentThis">
      <div className="grid-50">
        <div className="grid-container">
          <div className="grid-30" style={{verticalAlign:'middle'}}>First Name</div>
          <div className="grid-70">
            <input className="pt-input .pt-fill" type="text" placeholder="First Name" dir="auto" />
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-30">Last Name</div>
          <div className="grid-70">
            <input className="pt-input .pt-fill" type="text" placeholder="Last Name" dir="auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

class StaffDetails extends Component {
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
                <PersonnelDetails />
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

export default StaffDetails;
