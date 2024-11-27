import {FlatList} from 'react-native';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import BracketText from '../atoms/Text/BracketText';
import BracketTouchableOpacity from '../atoms/view/BracketTouchableOpacity';

const LevelLabelList = forwardRef((props, ref) => {
  const [currentSnapPoint, setCurrentSnapPoint] = useState(0);

  const updateTheLevellist = snapPoint => {
    setCurrentSnapPoint(snapPoint);
  };

  // Use useImperativeHandle to expose the function to the parent
  useImperativeHandle(ref, () => ({
    updateTheLevellist,
  }));

  const renderLevelItem = ({item, index}) => {
    const str = item.toLowerCase().replace('_', '-');

    return (
      <BracketTouchableOpacity
        onPress={() => {
          props.scrollToItem(index);
          setCurrentSnapPoint(index);
        }}
        style={{marginTop: 10}}>
        <BracketText
          style={{
            padding: 10,
            backgroundColor: index === currentSnapPoint ? 'yellow' : '#0845d4',
            borderRadius: 10,
            color: index === currentSnapPoint ? 'black' : 'white',
            textAlign: 'center',
            marginLeft: 15,
          }}>
          {str.charAt(0).toUpperCase() + str.slice(1)}
        </BracketText>
      </BracketTouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal
      data={props.unequeLevels}
      keyExtractor={(item, index) => `level-${index}`}
      renderItem={renderLevelItem}
      showsHorizontalScrollIndicator={false}
    />
  );
});

export default LevelLabelList;
