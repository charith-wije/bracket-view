import {Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const globalStyles = StyleSheet.create({
  // Define common colors
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#f4f4f4',
    text: '#333',
  },

  // Define common typography
  typography: {
    matchesHeader: {
      fontSize: 18,
    },
    matchCardFullTime: {fontSize: 12},
    bodyText: {
      fontSize: 16,
      fontWeight: 'normal',
      color: '#333',
    },
    matchCardPaneltyText: {fontSize: 12},
  },

  // Define common spacing
  spacing: {
    small: 8,
    medium: 16,
    large: 32,
  },

  // Common layout styles
  bracketMainContainer: {
    flex: 1,
    backgroundColor: '#011f8c',
  },

  round: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },

  matchCardMainContainer: {
    width: screenWidth / 2 - 15,
    borderRadius: 15,
    backgroundColor: '#07027d',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },

  matchCardSecondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  matchCardVideoButton: {
    width: 20,
    aspectRatio: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  matchCardThirdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  matchCardThirdSubContainer: {flexDirection: 'row'},
  matchCardFlag: {
    width: 22,
    aspectRatio: 1,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    marginRight: 8,
  },
  roundFlatListScrolViewContent: {
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 0,
  },
  round: {
    alignItems: 'center',
    width: screenWidth * 0.5,
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  matchFlatlistScrolViewContent: {flexGrow: 1, justifyContent: 'space-around'},
});

export default globalStyles;
