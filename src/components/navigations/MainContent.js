import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from '../helpers/PageNotFound';
// import { CSSTransitionGroup } from 'react-transition-group';

import Dashboard from '../Dashboard';
import CustomerList from '../customers/CustomerList';
import CustomerNew from '../customers/CustomerNew';
import StaffList from '../humanresource/StaffList';
import StaffDetails from '../humanresource/StaffDetails';

export default class MainContent extends Component {
  render() {
    return(
      <div style={{paddingTop:'10px'}}>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/customer' component={CustomerList} />
          <Route exact path='/customer/new' component={CustomerNew} />
          <Route exact path='/hr' component={StaffList} />
          <Route exact path='/hr/staff-details' component={StaffDetails} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}
