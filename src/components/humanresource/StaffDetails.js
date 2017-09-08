import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';

class PersonnelDetails extends Component {
  handleOnChange() {

  }

  render(){
    var { staffDetails } = this.props
    const labelWidth = 'grid-40'
    const fieldWidth = 'grid-60'
    return (
      <div className="grid-container pt-card transparentThis">
        <div className="grid-50">
          <div className="grid-container">
            <div className={labelWidth} style={{verticalAlign:'middle'}}>First Name</div>
            <div className={fieldWidth}>
              <input className="pt-input .pt-fill"
                type="text"
                placeholder="First Name" dir="auto"
                id="firstName" name="firstName"
                defaultValue={staffDetails.firstname} />
            </div>
          </div>
          <div className="grid-container">
            <div className={labelWidth}>Last Name</div>
            <div className={fieldWidth}>
              <input className="pt-input .pt-fill" type="text" placeholder="Last Name"
                dir="auto"
                defaultValue={staffDetails.lastname} />
            </div>
          </div>
          <div className="grid-container">
            <div className={labelWidth}>Staff ID</div>
            <div className={fieldWidth}>
              <input className="pt-input .pt-fill" type="text" placeholder="Last Name"
                dir="auto"
                defaultValue={staffDetails.lastName} />
            </div>
          </div>
          <div className="grid-container">
            <div className={labelWidth}>Designation</div>
            <div className={fieldWidth}>
              <input className="pt-input .pt-fill" type="text" placeholder="Last Name"
                dir="auto"
                defaultValue={staffDetails.lastName} />
            </div>
          </div>
          <div className="grid-container">
            <div className={labelWidth}>Department</div>
            <div className={fieldWidth}>
              <input className="pt-input .pt-fill" type="text" placeholder="Department"
                dir="auto"
                defaultValue={staffDetails.lastName} />
            </div>
          </div>
          <div className="grid-container">
            <div className={labelWidth}>Email</div>
            <div className={fieldWidth}>
              <input className="pt-input .pt-fill" type="text" placeholder="Emial"
                dir="auto"
                defaultValue={staffDetails.email} />
            </div>
          </div>
        </div>
        <div className="grid-50">
          <div className="grid-container">
            <div className={labelWidth} style={{verticalAlign:'middle'}}>Street Address 1</div>
            <div className={fieldWidth}>
              <input className="pt-input .pt-fill"
                type="text"
                placeholder="First Name" dir="auto"
                id="firstName" name="firstName"
                defaultValue={staffDetails.firstName} />
            </div>
          </div>
          <div className="grid-container">
            <div className={labelWidth} style={{verticalAlign:'middle'}}>Street Address 2</div>
            <div className={fieldWidth}>
              <input className="pt-input .pt-fill"
                type="text"
                placeholder="First Name" dir="auto"
                id="firstName" name="firstName"
                defaultValue={staffDetails.firstName} />
            </div>
          </div>
          <div className="grid-container">
            <div className={labelWidth} style={{verticalAlign:'middle'}}>City</div>
            <div className={fieldWidth}>
              <input className="pt-input .pt-fill"
                type="text"
                placeholder="First Name" dir="auto"
                id="firstName" name="firstName"
                defaultValue={staffDetails.firstName} />
            </div>
          </div>
          <div className="grid-container">
            <div className={labelWidth} style={{verticalAlign:'middle'}}>State</div>
            <div className={fieldWidth}>
              <input className="pt-input .pt-fill"
                type="text"
                placeholder="First Name" dir="auto"
                id="firstName" name="firstName"
                defaultValue={staffDetails.firstName} />
            </div>
          </div>
          <div className="grid-container">
            <div className={labelWidth} style={{verticalAlign:'middle'}}>Country</div>
            <div className={fieldWidth}>
              <input className="pt-input .pt-fill"
                type="text"
                placeholder="First Name" dir="auto"
                id="firstName" name="firstName"
                defaultValue={staffDetails.firstName} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class AllowanceAndBenefits extends Component {
  render() {
    return (
      <div>
        Allowance And Benefits
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
              <Tab>Allowance & Benefits</Tab>
              <Tab>Administration</Tab>
              <Tab>Financial</Tab>
            </TabList>
            <div style={{border:1, marginTop:'-10px'}}>
              <TabPanel>
                <PersonnelDetails staffDetails={this.state.staffDetails} />
              </TabPanel>
              <TabPanel>
                <AllowanceAndBenefits staffDetails={this.state.staffDetails} />
              </TabPanel>
              <TabPanel>
                <PersonnelDetails  staffDetails={this.state.staffDetails} />
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
