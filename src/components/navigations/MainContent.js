import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageNotFound from '../helpers/PageNotFound'

import Dashboard from '../Dashboard';
import CustomerList from '../customers/CustomerList';
import CustomerNew from '../customers/CustomerNew';

export default class MainContent extends Component {
  render() {
    const NotFound = () => (
      <div className="page-container centeringText" style={{paddingTop:'70px'}}>
        <div className="bg" style={{ backgroundImage: 'url()'}}></div>
        <h1 className="title">Page not found</h1>
        <p >

            Well, this is embarassing. Your request cannot be resolved.

        </p>
        {
          setTimeout(function() {
            return (<Redirect to='/customer' />)
          }, 500)
        }
      </div>
    )
    return(
      <div style={{paddingTop:'10px'}}>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/customer' component={CustomerList} />
          <Route exact path='/customer/new' component={CustomerNew} />
          <Route path='*' component={PageNotFound} /> 
        </Switch>
      </div>
    )
  }
}
