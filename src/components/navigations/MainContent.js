import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from '../helpers/PageNotFound';
// import { CSSTransitionGroup } from 'react-transition-group';

import Dashboard from '../Dashboard';
import CustomerList from '../customers/CustomerList';
import CustomerNew from '../customers/CustomerNew';
import StaffList from '../humanresource/StaffList';
import StaffDetails from '../humanresource/StaffDetails';
import LeaveApplication from '../humanresource/LeaveApplication';
import PayAdvice from '../humanresource/PayAdvice';

export default class MainContent extends Component {
  render() {
    return(
      <div style={{marginTop:'15px'}} className="pt-card transparentThis">
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/customer' component={CustomerList} />
          <Route exact path='/customer/new' component={CustomerNew} />
          <Route exact path='/hr' component={StaffList} />
          <Route exact path='/hr/leave' component={LeaveApplication} />
          <Route exact path='/hr/staff-details' component={StaffDetails} />
          <Route exact path='/hr/pa' component={PayAdvice} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}
