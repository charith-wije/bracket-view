import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BracketView from '../atoms/view/BracketView';
import BracketText from '../atoms/Text/BracketText';

const MatchesScreen = () => {
  return (
    <BracketView>
      <StatusBar barStyle="dark-content" backgroundColor="blue" />
      <BracketText>MatchesScreen</BracketText>
    </BracketView>
  );
};

export default MatchesScreen;
