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
import AllowanceAndBenefits from '../humanresource/AllowanceAndBenefits';

export default class MainContent extends Component {
  state = {
    isOpen: false
  }
  render() {
    return(
      <div>
        <div style={{marginTop:'15px', height:'75vh'}} className="pt-card transparentThis centeringText">
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/customer' component={CustomerList} />
            <Route exact path='/customer/new' component={CustomerNew} />
            <Route exact path='/hr' component={StaffList} />
            <Route exact path='/hr/leave' component={LeaveApplication} />
            <Route exact path='/hr/staff-details' component={StaffDetails} />
            <Route exact path='/hr/ab' component={AllowanceAndBenefits} />
            <Route exact path='/hr/pa' component={PayAdvice} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </div>
        <div style={{height:'15px'}} className="">
          <div className="centeringText" style={{paddingTop:'25px'}}>Copy Your Rights! 2017</div>
        </div>
      </div>
    )
  }
}
