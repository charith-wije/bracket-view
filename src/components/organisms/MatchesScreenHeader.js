import {StyleSheet} from 'react-native';
import React from 'react';
import BracketView from '../atoms/view/BracketView';
import BracketText from '../atoms/Text/BracketText';

const MatchesScreenHeader = () => {
  return (
    <BracketView>
      <BracketText style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
        Matches
      </BracketText>
    </BracketView>
  );
};

export default MatchesScreenHeader;

const styles = StyleSheet.create({});
