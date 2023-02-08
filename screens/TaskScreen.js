import {Text, Button, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import firebase from '../config'
import Fetch from '../components/taskList';

export default class TaskScreen extends Component {

  constructor(){
    super();
    this.state = {
      task: []
    }
  }


    render(){
        return(
            <View>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}> Task Reminder App </Text>
                </View>

                <View>
                  <Fetch />
                </View>

                <View>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("TaskAddScreen")}>
                    <Text style={styles.buttonText}> + </Text> 
                  </TouchableOpacity>
                </View>
            </View>
        )
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    backgroundColor: '#416DA5',
    height: 40,
  },
  titleText: {
    fontSize: 25,
    color: 'black'
  },
  buttonContainer: {
    paddingLeft: 280,
    paddingTop: 520,
    justifyContent: 'center'
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 200,
    backgroundColor: '#416DA5',
    paddingHorizontal: 15,
    justifyContent: 'center',
    paddingBottom: 45
  },
  buttonText: {
    fontSize: 30,
    color: 'white'
  }
});