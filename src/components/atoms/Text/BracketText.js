import {StyleSheet, Text} from 'react-native';
import React from 'react';

const BracketText = ({children, style, ...props}) => {
  return (
    <Text style={[style]} {...props}>
      {children}
    </Text>
  );
};

export default BracketText;
