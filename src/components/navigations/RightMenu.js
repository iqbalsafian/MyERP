import React, { Component } from 'react';
// import { Card } from '@blueprintjs/core';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MainChat from '../communications/MainChat'

class RightMenu extends Component {

  render() {
    return (
      <div className="chat pt-dark transparentThis" style={{height: '85vh'}}>
        <Tabs style={{marginTop:'-10px'}}>
          <TabList className="centeringText">
            <Tab>Chats</Tab>
            <Tab>Contacts</Tab>
          </TabList>
          <TabPanel>
            <MainChat />
          </TabPanel>
          <TabPanel style={{height: '70vh'}}>
            <Contacts />
          </TabPanel>
        </Tabs>
      </div>
    )
  }

  onTabs2Change() {

  }
}

class Contacts extends Component {
  render() {
    return(
      <div>
        Contacts
      </div>
    )
  }
}

export default RightMenu;
