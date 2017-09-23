import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class PageNotFound extends Component {
  callMeBack() {
    setTimeout(() => {
      this.setState({redirect: true})
    }, 5000)
  }

  state = {
    redirect: false
  }

  componentDidMount() {
    this.callMeBack()
  }

  render() {
    return (
      (this.state.redirect)
      ? <Redirect to='/' />
      :
        <div className="page-container centeringText" style={{paddingTop:'70px'}}>
          <div className="bg" style={{ backgroundImage: 'url()'}}></div>
          <h1 className="title">Page not found</h1>
          <p >

              Well, this is embarassing. The path was not found.
              <br />
              Redirecting in 5 seconds.
              <br />
              Or, It is now safe to turn off your computer.

          </p>
        </div>
    )
  }
}

export default PageNotFound;
