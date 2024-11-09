import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {
  const AppName = 'To Do List';
  const userName = 'Romer John';
  const currentDate = new Date().toDateString();

  return (
    <MainLayout>
      <Text style={styles.title}>About {AppName}</Text>
      <Text style={styles.text}>
        This app was created by {userName} on {currentDate}
      </Text>
      <Button title="Go to Home Screen" onPress={() => navigation.navigate('Home')} />
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
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default AboutScreen;
