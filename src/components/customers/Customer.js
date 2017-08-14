import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import CustomerList from './CustomerList';
import CustomerNew from './CustomerNew';

export default class Customer extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/customer' component={CustomerList} />
          <Route path='/customer/new' component={CustomerNew} />
        </Switch>
      </div>
    )
  }
}
