import {Image} from 'react-native';
import React from 'react';

const BracketImage = ({source, style, resizeMode = 'cover', ...props}) => {
  return (
    <Image source={source} style={[style]} resizeMode={resizeMode} {...props} />
  );
};

export default BracketImage;
