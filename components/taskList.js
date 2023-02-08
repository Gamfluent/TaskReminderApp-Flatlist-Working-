import { View, Text, StyleSheet, FlatList, TouchableOpacity,} from 'react-native';
import React, {useState, useEffect} from 'react';
import { firebase } from '../config';

const Fetch = () => {
  const [tasks, setTasks] = useState([]);
  const tasksRef = firebase.firestore().collection('tasks');

useEffect(() => {
  tasksRef.onSnapshot(
    querySnapshot => {
      const tasks = []
      querySnapshot.forEach((doc) => {
        const taskName = doc.data()
        tasks.push({
          id: doc.id,
          taskName
        })
      })
      setTasks(tasks)
    }
  )
  //console.log(tasks);
}, [tasksRef])

  return (
    <View style={{flex: 1, marginTop: 100}}>
      <FlatList
        style={{height: '100%'}}
        data={tasks}
        numColumns= {1}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.container}>
            <View style={styles.innerContainer}>
              <Text style={styles.itemHeading}>{item.taskName.taskName}</Text>
            </View>
          </TouchableOpacity>
        )}

      />
    </View>
  )
}

export default Fetch

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    padding: 15,
    borderRadius:  15,
    margin: 5,
    marginHorizontal: 10
  },

  innerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },

  itemHeading: {
    fontWeight: 'bold',
  }
})