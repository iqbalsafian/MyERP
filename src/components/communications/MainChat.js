import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class MainChat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: [],
      endpoint: 'http://localhost:3003'
    }
    const { endpoint } = this.state;
    this.socket = socketIOClient(endpoint, {
      query: { token: localStorage.jwtToken }
    });
  }

  componentDidMount() {
    this.retrieveConversations();
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState.response) !== JSON.stringify(this.state.response))
      return true;
  }

  retrieveConversations = () => {
    this.socket.emit("displaySnapshot", 1000);
    this.socket.on("reply", (response) => {
      // console.log(response);
      this.setState({response})
    })
  }

  render() {
    const { response } = this.state
    return(
      <div style={{margin:'-7px 7px 0 7px'}} className="centeringText">
        {
          response ? response.map((resp, key) => {
            return (
              <div key={key} className="pt-callout chatBorder grid-container">
                <div className="grid-30">
                  <img src="" alt="" />
                </div>
                <div className="grid-70">
                  {
                    resp.message
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
