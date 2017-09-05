import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class MainChat extends Component {
  constructor() {
    super()
    this.state = {
      response: false,
      endpoint: 'http://localhost:3003'
    }
    const { endpoint } = this.state;
    this.socket = socketIOClient(endpoint);
  }

  componentDidMount() {
    this.socket.emit("getData", 1000);
  }

  handleClick = () => {
    this.socket.emit("getData", 1000);
    this.socket.on("reply", (response) => {
      this.setState({response})
    })
  }

  render() {
    const { response } = this.state
    return(
      <div style={{margin:'-7px 7px 0 7px'}}>
        <div className="pt-callout chatBorder">
        </div>
        <div className="pt-callout chatBorder">
        </div>
        {
          response
        }
        <button onClick={this.handleClick}>klik aku</button>
      </div>
    )
  }
}

export default MainChat;
