import React, { Component } from 'react';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
import MainContent from './components/layouts/MainContent';

import WebFontLoader from 'webfontloader';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Header />
        <MainContent />
      </div>
    )
  }
}

export default App;
