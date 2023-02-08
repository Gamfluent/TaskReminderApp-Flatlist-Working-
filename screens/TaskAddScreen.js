import { Text, Button, View, StyleSheet, TouchableOpacity, Image, TextInput, Input } from 'react-native';
import React, { Component, useState } from 'react'; 
import DatePicker from 'react-native-datepicker';
import { firebase } from '../config';

export default class TaskAddScreen extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      date: ''
    }
  }

  addTask = () => {
    const db = firebase.firestore();
    db.collection("tasks").add({
      taskName: this.state.name,
      //date: this.state.date,
    });
  };

  doStuff = () => {
    this.addTask();
    this.props.navigation.navigate("TaskScreen")
  }

  render(){
    return(
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> Task Add Screen </Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ name: text });
          }}
          value={this.state.name}
          placeholder="Enter Task Name"
          underlineColorAndroid='transparent'
        />

        <DatePicker
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2026-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={date => { this.setState({ date: date }); }}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {this.doStuff()}}>
           <Text style={styles.buttonText}> Confirm </Text> 
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 100,
    width: 180,
    height: 50
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#416DA5',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 40,
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor: '#416DA5',
    height: 40,
  },
  titleText: {
    fontSize: 20,
    color: 'black'
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
});