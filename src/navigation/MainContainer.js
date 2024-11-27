import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../components/screens/HomeScreen';
import GroupsScreen from '../components/screens/GroupsScreen';
import FantasyScreen from '../components/screens/FantasyScreen';
import MoreScreen from '../components/screens/MoreScreen';
import MatchesScreenHeader from '../components/organisms/MatchesScreenHeader';
import FixturesAndResultsScreen from '../components/screens/MatchesTopTabScreens/FixturesAndResultsScreen';
import BracketScreen from '../components/screens/MatchesTopTabScreens/BracketScreen';
import BracketView from '../components/atoms/view/BracketView';

// Screen Names
const homeName = 'Home';
const matchesName = 'Matches';
const groupsName = 'Groups';
const fantacyName = 'Fantacy';
const moreName = 'More';

const fixturesAndResultsName = 'Fixtures & results';
const bracketName = 'Bracket';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const MatchScreenTopTabs = () => {
  return (
    <TopTab.Navigator
      initialRouteName={fixturesAndResultsName}
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'yellow',
          height: 2,
        },
        tabBarStyle: {
          backgroundColor: '#011f8c',
        },
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: '#e6e6e8',
        tabBarItemStyle: {width: 150},
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}>
      <TopTab.Screen
        name={fixturesAndResultsName}
        component={FixturesAndResultsScreen}
      />
      <TopTab.Screen name={bracketName} component={BracketScreen} />
    </TopTab.Navigator>
  );
};

const MainContainer = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let routName = route.name;

            if (routName === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            }
            if (routName === matchesName) {
              iconName = focused ? 'accessibility' : 'accessibility-outline';
            }
            if (routName === groupsName) {
              iconName = focused ? 'list' : 'list-outline';
            }
            if (routName === fantacyName) {
              iconName = focused ? 'shirt' : 'shirt-outline';
            }
            if (routName === moreName) {
              iconName = focused
                ? 'ellipsis-horizontal'
                : 'ellipsis-horizontal-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#efb810',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {backgroundColor: '#011f8c'},
          headerTitleAlign: 'center',
        })}>
        <BottomTab.Screen name={homeName} component={HomeScreen} />
        <BottomTab.Screen
          name={matchesName}
          component={MatchScreenTopTabs}
          options={{
            headerTitle: () => <MatchesScreenHeader />,
            headerLeft: () => (
              <BracketView style={{marginLeft: 15}}>
                <Ionicons name="bag-add-outline" size={30} color="white" />
              </BracketView>
            ),
            headerRight: () => (
              <BracketView style={{marginRight: 15}}>
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color="white"
                />
              </BracketView>
            ),
            headerStyle: {backgroundColor: 'blue'},
          }}
        />
        <BottomTab.Screen name={groupsName} component={GroupsScreen} />
        <BottomTab.Screen name={fantacyName} component={FantasyScreen} />
        <BottomTab.Screen name={moreName} component={MoreScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
