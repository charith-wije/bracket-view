import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getBrackets} from '../../../redux/actions/bracketsAction';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Svg, {Line} from 'react-native-svg';

const {width: screenWidth} = Dimensions.get('window');
const ITEM_WIDTH = screenWidth * 0.8; // Adjust item width
const ITEM_MARGIN = 10;

const BracketScreen = () => {
  const {brackets, isLoading, error} = useSelector(state => state.brackets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrackets());
  }, []);

  console.log(JSON.stringify(brackets));

  const quaterFinals = brackets?.data?.filter(
    el => el.level === 'QUARTER_FINAL',
  );
  const semiFinals = brackets?.data?.filter(el => el.level === 'SEMI_FINAL');
  const final = brackets?.data?.filter(el => el.level === 'FINAL');

  const connectorWidth = 50; // Horizontal space between brackets
  const itemHeight = 80; // Height of each match box

  const data = [
    // Mock data for teams and matches
    // [
    //   {team1: 'Team A', team2: 'Team B'},
    //   {team1: 'Team G', team2: 'Team H'},
    //   {team1: 'Team I', team2: 'Team J'},
    //   {team1: 'Team K', team2: 'Team L'},
    // ],
    quaterFinals,
    // [
    //   {team1: 'Winner 1', team2: 'Winner 2'},
    //   {team1: 'Winner 3', team2: 'Winner 4'},
    // ]
    semiFinals,
    // [{team1: 'Finalist 1', team2: 'Finalist 2'}]
    final,
  ];

  const matchCard = ({item, index}) => {
    const startY = index * itemHeight + itemHeight / 2;
    const endY = (index * itemHeight + (index + 1) * itemHeight) / 2;
    return (
      <>
        <View
          style={{
            width: screenWidth / 2 - 15,
            borderRadius: 15,
            backgroundColor: '#07027d',
            paddingHorizontal: 12,
            paddingVertical: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 12}}>Full time</Text>
            <View
              style={{
                width: 20,
                aspectRatio: 1,
                backgroundColor: 'yellow',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 12,
              }}>
              <Ionicons name="play" size={12} color="black" />
            </View>
          </View>
          {item.away_team.penalties && (
            <Text numberOfLines={1} style={{fontSize: 12}}>
              {item.away_team.score > item.home_team.name
                ? item.away_team.name
                : item.home_team.name}{' '}
              win on panalties
            </Text>
          )}
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={{
                    uri: item.away_team.flag,
                  }}
                  style={{
                    width: 22,
                    aspectRatio: 1,
                    borderRadius: 150 / 2,
                    overflow: 'hidden',
                    marginRight: 8,
                  }}
                />
                <Text>{item.away_team.name}</Text>
              </View>
              <Text>{item.away_team.score}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={{
                    uri: item.home_team.flag,
                  }}
                  style={{
                    width: 22,
                    aspectRatio: 1,
                    borderRadius: 150 / 2,
                    overflow: 'hidden',
                    marginRight: 8,
                  }}
                />
                <Text>{item.home_team.name}</Text>
              </View>
              <Text>{item.home_team.score}</Text>
            </View>
          </View>
        </View>
        {
          // <View key={index} style={styles.match}>
          //   {/* Draw connector line if not the last round */}
          //   {index < data.length - 1 && (
          //     <Svg
          //       height={itemHeight}
          //       width={connectorWidth}
          //       style={{
          //         position: 'absolute',
          //         left: screenWidth / 3,
          //         top: 0,
          //       }}>
          //       <Line
          //         x1="0"
          //         y1={startY}
          //         x2={connectorWidth}
          //         y2={endY}
          //         stroke="black"
          //         strokeWidth="2"
          //       />
          //     </Svg>
          //   )}
          // </View>
        }
      </>
    );
  };

  const renderRound = ({item, index}) => (
    <View style={styles.round}>
      <FlatList
        data={item}
        keyExtractor={(match, matchIndex) => `${index}-${matchIndex}`}
        renderItem={matchCard}
        scrollEnabled={false} // Disable scrolling for nested FlatList
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-around',
        }}
      />
    </View>
  );

  const TournamentBracket = () => {
    return (
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item, index) => `round-${index}`}
        renderItem={renderRound}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        decelerationRate="fast" // Makes snapping smoother
        snapToInterval={ITEM_WIDTH + ITEM_MARGIN * 2} // Item width + margin
        snapToAlignment="center" // Snap to the center of the screen
        contentInset={{
          left: (screenWidth - ITEM_WIDTH) / 2,
          right: (screenWidth - ITEM_WIDTH) / 2,
        }} // Center align the first and last items
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* {MatchCard()} */}
      {isLoading ? (
        <Text style={{fontSize: 18}}>Loading...</Text>
      ) : (
        <TournamentBracket />
      )}
    </SafeAreaView>
  );
};

export default BracketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011f8c',
  },
  scrollViewContent: {
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
  roundTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  match: {
    marginBottom: 40,
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  team: {
    fontSize: 16,
  },
  vs: {
    marginVertical: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
