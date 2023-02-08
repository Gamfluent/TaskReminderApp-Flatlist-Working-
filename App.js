import React, { Component, useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

// You can import from local files
import MainScreen from './screens/MainScreen';
import TaskScreen from './screens/TaskScreen';
import TaskAddScreen from './screens/TaskAddScreen.js'

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer />
      </View>
    )
  }
}

var switchContainer = createSwitchNavigator({
  MainScreen : MainScreen,
  TaskScreen : TaskScreen,
  TaskAddScreen : TaskAddScreen,
})
const Appcontainer = createAppContainer(switchContainer)
