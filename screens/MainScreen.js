import {Text, Button, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, { Component } from 'react'; 

export default class MainScreen extends Component {

    render(){
        return(
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}> Task Reminder App </Text>
                
                <View style={styles.iconContainer}>
                  <Image style={styles.iconImage} source={require('../icon.png')} />
                </View>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("TaskScreen")}>
                   <Text style={styles.buttonText}> Tasks </Text> 
                   </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 180
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
  iconContainer: {
    alignItems: 'center',
    height: 50,
    width: 50,
    paddingTop: 20
  },
  iconImage: {
    width: 150,
    height: 150,
    paddingLeft: 200,
    paddingTop: 200,
    borderRadius: 20,
  }
});