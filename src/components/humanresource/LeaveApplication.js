import React, { Component } from 'react';

class LeaveApplication extends Component {
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
                <th>Duration</th>
                <th>Approved By</th>
              </tr>
            </thead>
            <tbody>
              {
                dataList.map((data, key) => {
                  return (
                    <tr key={key} className="bg-green">
                      <td>{key+1}</td>
                      <td>{data.applicant}</td>
                      <td>{data.type}</td>
                      <td>{data.date_from}</td>
                      <td>{data.date_to}</td>
                      <td>{data.duration}</td>
                      <td>{data.approved_by}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default LeaveApplication;
