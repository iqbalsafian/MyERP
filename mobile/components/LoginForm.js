import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';

export default class LoginForm extends React.Component {
  onPressSubmit() {

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <FormLabel labelStyle={styles.label}>Email</FormLabel>
          <FormInput></FormInput>
        </View>
        <View style={styles.subContainer}>
          <FormLabel labelStyle={styles.label}>Password</FormLabel>
          <FormInput></FormInput>
        </View>
        <View style={styles.subContainer}>
          <Button title="Submit" onPress={this.onPressSubmit} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  subContainer: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'white'
  }
})
