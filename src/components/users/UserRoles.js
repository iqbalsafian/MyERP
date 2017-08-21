import React, { Component } from 'react';

class UserRoles extends Component {
  render() {
    return(
      <div>
        User Roles
        <div>
          <table className="pt-table pt-bordered pt-condensed centeringText">
            <thead>
              <tr align="center" className="centeringText">
                <th>Type</th>
                <th>Number of Users</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    )
  }
}

export default UserRoles;
