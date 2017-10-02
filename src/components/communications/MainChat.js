import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { apiServer } from '../../actions/config';

class MainChat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: [],
      endpoint: apiServer
    }
    const { endpoint } = this.state;
    this.socket = socketIOClient(endpoint, {
      query: { token: localStorage.jwtToken }
    });
    // console.log('socket');
  }

  componentDidMount() {
    this.retrieveConversations();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.response);
    if (JSON.stringify(prevState.response) !== JSON.stringify(this.state.response))
      return true;
  }

  retrieveConversations = () => {
    this.socket.emit("displaySnapshot", 200);
    this.socket.on("reply", (response) => {
      // console.log(response);
      this.setState({response})
    })
  }

  render() {
    const { response } = this.state
    // console.log(localStorage.jwtToken);
    // console.log(response);
    return(
      <div style={{margin:'-7px 7px 0 7px'}} className="centeringText">
        {
          response.length ? response.map((resp, key) => {
            return (
              <div key={key} className="pt-callout pt-interactive chatBorder grid-container">
                <div className="grid-30">
                  <img src={require('../../images/REWmEe.jpg')} alt="" height="30" width="30" />
                </div>
                <div className="grid-70 leftingText">
                  {
                    resp.message.slice(0, 20)
                  }
                </div>
              </div>
            )
          }) : 'No conversation was found'
        }
      </div>
    )
  }
}

export default MainChat;
