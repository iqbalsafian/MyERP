import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Admin from '../administration/Admin';
import Departments from '../administration/Departments';
import StaffList from '../administration/StaffList';
import Customer from '../customer/Customer';

class MainContent extends Component {
  render() {
    return(
      <div className="al-main">
        <div className="al-content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/ahr" component={Admin} />
            <Route exact path="/ahr/slist" component={StaffList} />
            <Route exact path="/ahr/depts" component={Departments} />
            <Route path="/customers" component={Customer} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default MainContent;
