import React from 'react';
import BracketView from '../atoms/view/BracketView';
import BracketImage from '../atoms/Image/BracketImage';
import globalStyles from '../../styles/globalStyles';
import BracketText from '../atoms/Text/BracketText';

const MatchCardCountryInfo = ({item, team}) => {
  return (
    <BracketView style={globalStyles.matchCardThirdContainer}>
      <BracketView style={globalStyles.matchCardThirdSubContainer}>
        <BracketImage
          source={{
            uri: item[team].flag,
          }}
          style={globalStyles.matchCardFlag}
          resizeMode="cover"
        />
        <BracketText>{item[team].name}</BracketText>
      </BracketView>
      <BracketText>{item[team].score}</BracketText>
    </BracketView>
  );
};

export default MatchCardCountryInfo;
