import React, { Component } from 'react';

class NewStaffForm extends Component {
  render() {
    return(
      <div className="">
        <p className="centeringText">Personel Details</p>
        <div className="grid-container">
          <div className="grid-50">
            <div className="grid-container">
              <div className="grid-40">First Name</div>
              <div className="grid-60">
                <input className="pt-input"
                  name="firstname" id="firstname" />
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-40">Last Name</div>
              <div className="grid-60">
                <input className="pt-input"
                  name="lastname" id="lastname" />
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-40">Staff ID</div>
              <div className="grid-60">
                <input className="pt-input"
                  name="staffid" id="staffid" />
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-40">Designation</div>
              <div className="grid-60">
                <input className="pt-input"
                  name="designation" id="designation"  />
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-40">Email</div>
              <div className="grid-60">
                <input className="pt-input"
                  name="email" id="email" />
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-40">Department</div>
              <div className="grid-60">
                <select id="department" name="department" className="pt-select pt-fill">
                  <option value="0">Select Department</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid-50">
            <div className="grid-container">
              <div className="grid-40">Street Address</div>
              <div className="grid-60">
                <input className="pt-input"
                  name="streetaddress1" id="streetaddress1" />
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-40">Street Address 2</div>
              <div className="grid-60">
                <input className="pt-input"
                  name="streetaddress2" id="streetaddress2" />
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-40">Postcode</div>
              <div className="grid-60">
                <input className="pt-input"
                  name="postcode" id="postcode" />
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-40">City/Province</div>
              <div className="grid-60">
                <input className="pt-input"
                  name="city" id="city" />
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-40">State</div>
              <div className="grid-60">
                <input className="pt-input"
                  name="state" id="state" />
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-40">Country</div>
              <div className="grid-60">
                <input className="pt-input"
                  name="country" id="country" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewStaffForm;
