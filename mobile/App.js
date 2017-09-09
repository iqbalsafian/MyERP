import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import MainContent from './components/MainContent'
import LoginForm from './components/LoginForm'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
    }
  }

  async checkIfUserHasLoggedIn() {
    let isLoggedIn = false;
    try {
      const isLoggedIn = await AsyncStorage.getItem('@JWTAuth:key');
      if (isLoggedIn !== null) {
        this.setState({
          isUserLoggedIn: true
        })
      }
    } catch (error) {
      console.log('false');
    }
    return isLoggedIn;
  }

  render() {
    const isLoggedIn = this.checkIfUserHasLoggedIn();
    console.log('state: ' + this.state);
    return (
      <Image source={require('./images/blur-bg.jpg')} style={styles.backgroundImage}>
        { this.state.isUserLoggedIn ? <MainContent /> : <LoginForm /> }
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    // alignSelf: 'stretch',
    width: null,
    height: null,
    resizeMode: 'cover'
  }
});
