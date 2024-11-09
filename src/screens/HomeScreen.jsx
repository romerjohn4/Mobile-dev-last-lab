import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: tasks.length, text: taskText }]);
  };

  return (
    <MainLayout>
      <Text style={styles.title}>To Do List</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default HomeScreen;
