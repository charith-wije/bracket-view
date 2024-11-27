import {Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

export const API = {
  BASE_URL:
    'https://d393ynejnklmr1.cloudfront.net/media/tournaments/KnockoutResponseJson.txt',
};

export const ITEM_WIDTH = screenWidth * 0.8; // Adjust item width
