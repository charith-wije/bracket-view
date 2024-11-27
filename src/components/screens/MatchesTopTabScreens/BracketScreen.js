import {Dimensions, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBrackets} from '../../../redux/actions/bracketsAction';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LevelLabelList from '../../organisms/LevelLabelList';
import BracketText from '../../atoms/Text/BracketText';
import BracketImage from '../../atoms/Image/BracketImage';
import BracketView from '../../atoms/view/BracketView';
import globalStyles from '../../../styles/globalStyles';
import MatchCardCountryInfo from '../../molecules/MatchCardCountryInfo';

const {width: screenWidth} = Dimensions.get('window');
const ITEM_WIDTH = screenWidth * 0.8; // Adjust item width

const BracketScreen = () => {
  const {brackets, isLoading, error} = useSelector(state => state.brackets);
  const dispatch = useDispatch();

  const childRef = useRef();
  const flatListRef = useRef(null);

  useEffect(() => {
    dispatch(getBrackets());
  }, []);

  console.log(JSON.stringify(brackets));

  const quaterFinals = brackets?.data?.filter(
    el => el.level === 'QUARTER_FINAL',
  );
  const semiFinals = brackets?.data?.filter(el => el.level === 'SEMI_FINAL');
  const thirdPlace = brackets?.data?.filter(el => el.level === 'THIRD_PLACE');
  const final = brackets?.data?.filter(el => el.level === 'FINAL');

  const levels = brackets?.data?.map(el => el.level);

  const unequeLevels =
    brackets.length !== 0 &&
    Array.from(new Set([...levels])).filter(level => level !== 'THIRD_PLACE');

  const connectorWidth = 50; // Horizontal space between brackets
  const itemHeight = 80; // Height of each match box

  const data = [quaterFinals, semiFinals, final, []];

  const callLevelFunction = snapPoint => {
    // Call the child's function using the ref
    if (childRef.current) {
      childRef.current.updateTheLevellist(snapPoint);
    }
  };

  const scrollToItem = index => {
    flatListRef.current?.scrollToIndex({
      index,
      animated: true, // For smooth scrolling
    });
  };

  const matchCard = ({item, index}) => {
    const startY = index * itemHeight + itemHeight / 2;
    const endY = (index * itemHeight + (index + 1) * itemHeight) / 2;
    return (
      <>
        <BracketView style={globalStyles.matchCardMainContainer}>
          <BracketView style={globalStyles.matchCardSecondContainer}>
            <BracketText style={globalStyles.typography.matchCardFullTime}>
              {'Full time'}
            </BracketText>
            <BracketView style={globalStyles.matchCardVideoButton}>
              <Ionicons name="play" size={12} color="black" />
            </BracketView>
          </BracketView>
          {item.away_team.penalties && (
            <BracketText
              numberOfLines={1}
              style={globalStyles.typography.matchCardPaneltyText}>
              {`${
                item.away_team.score > item.home_team.name
                  ? item.away_team.name
                  : item.home_team.name
              } won on panalties`}
            </BracketText>
          )}
          <BracketView>
            <MatchCardCountryInfo item={item} team="away_team" />
            <MatchCardCountryInfo item={item} team="home_team" />
          </BracketView>
        </BracketView>
      </>
    );
  };

  const renderRound = ({item, index}) => (
    <BracketView style={globalStyles.round}>
      <FlatList
        data={item}
        keyExtractor={(match, matchIndex) => `${index}-${matchIndex}`}
        renderItem={matchCard}
        scrollEnabled={false} // Disable scrolling for nested FlatList
        contentContainerStyle={globalStyles.matchFlatlistScrolViewContent}
      />
    </BracketView>
  );

  const TournamentBracket = () => {
    const handleMomentumScrollEnd = event => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const index = Math.round(offsetX / (ITEM_WIDTH - 50)); // Adjust if margin changes

      callLevelFunction(index);
    };
    return (
      <>
        <LevelLabelList
          ref={childRef}
          unequeLevels={unequeLevels}
          scrollToItem={scrollToItem}
        />

        <FlatList
          ref={flatListRef}
          horizontal
          data={data}
          keyExtractor={(item, index) => `round-${index}`}
          renderItem={renderRound}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={globalStyles.roundFlatListScrolViewContent}
          decelerationRate="fast" // Makes snapping smoother
          snapToInterval={ITEM_WIDTH - 50} // Item width + margin
          snapToAlignment="center" // Snap to the center of the screen
          contentInset={{
            left: (screenWidth - ITEM_WIDTH) / 2,
            right: (screenWidth - ITEM_WIDTH) / 2,
          }} // Center align the first and last items
          onMomentumScrollEnd={handleMomentumScrollEnd}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={globalStyles.bracketMainContainer}>
      {isLoading ? (
        <BracketText style={globalStyles.typography.matchesHeader}>
          {'Loading...'}
        </BracketText>
      ) : (
        <TournamentBracket />
      )}
    </SafeAreaView>
  );
};

export default BracketScreen;
