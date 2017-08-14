import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class PageNotFound extends Component {
  callMeBack() {
    setTimeout(() => {
      this.setState({redirect: true})
    }, 3000)
  }

  state = {
    redirect: false
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

              Well, this is embrassing. The path was not found.
              <br />
              Redirecting in 5 seconds

          </p>
          {
            this.callMeBack()
          }
        </div>
    )
  }
}

export default PageNotFound;
