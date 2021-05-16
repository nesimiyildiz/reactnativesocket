import React from 'react';
import {Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Login from './Screens/Login';
import Register from './Screens/Register';
import HomeIndex from './Screens/Home';
import AuthRedirect from './Screens/AuthRedirect';
import ChatRoomCreate from './Screens/Chat/Create';
import ChatRoomDetail from './Screens/Chat/Detail'
const AppStack = createStackNavigator({
  HomeIndex: {
    screen: HomeIndex,
  },
  ChatRoomCreate: {
    screen: ChatRoomCreate,
    navigationOptions: {
      title: 'New Chat Room',
      headerTitleStyle: {alignSelf: 'center'},
    }
  },
  ChatRoomDetail: {
    screen: ChatRoomDetail
  },
});

const AuthenticateStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      //header:null,
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      // header:null,
      headerShown: false,
    },
  },
});

const SwitchNavigator = createSwitchNavigator(
  {
    App: AppStack,
    AuthRedirect,
    Auth: AuthenticateStack,
  },
  {initialRouteName: 'AuthRedirect'},
);

export default createAppContainer(SwitchNavigator);
