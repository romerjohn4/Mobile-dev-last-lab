import React from 'react';
import { 
    Pressable, 
    View, 
    Text, 
    StyleSheet,
    FlatList, } from 'react-native';

    function ToDoList({ tasks }) {
      return (
        <FlatList>
          {tasks.map((task) => (
            <Pressable key={task.id}>
              <View style={styles.task}>
                <Text style={styles.taskText}>{task.text}</Text>
              </View>
            </Pressable>
          ))}
        </FlatList>
      );
    }

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
