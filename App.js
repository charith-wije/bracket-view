import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainContainer from './src/navigation/MainContainer';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return <MainContainer />;
};

export default App;

const styles = StyleSheet.create({});
