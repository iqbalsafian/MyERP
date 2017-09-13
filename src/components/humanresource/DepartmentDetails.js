import React, { Component } from 'react';

class DepartmentDetails extends Component {
  render() {
    return(
      <div>
        <form>
          <div className="grid-container">
            <div className="grid-40">
              <label className="pt-label pt-inline pt-fill">
                Department
                <span className="pt-text-muted">(required)</span>
              </label>
            </div>
            <div className="grid-60">
              <input className="pt-input" style={{width: '200px'}} type="text" placeholder="Text input" dir="auto" />
            </div>
          </div>
          <div className="grid-container">
            <div className="grid-40">
              <label className="pt-label pt-inline pt-fill">
                Department Head
              </label>
            </div>
            <div className="grid-60">
              <select>
                <option default>Select one</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default DepartmentDetails;
