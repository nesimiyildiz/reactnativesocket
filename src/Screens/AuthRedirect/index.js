import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from '@react-native-firebase/app';
export default class Index extends Component {
  componentDidMount() {
    const user = firebase.auth().currentUser;

    if (user) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Auth');
    }
  }

  render() {
    return <View />;
  }
}
