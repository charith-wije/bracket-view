import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../components/screens/HomeScreen';
import MatchesScreen from '../components/screens/MatchesScreen';
import GroupsScreen from '../components/screens/GroupsScreen';
import FantasyScreen from '../components/screens/FantasyScreen';
import MoreScreen from '../components/screens/MoreScreen';
import MatchesScreenHeader from '../components/organisms/MatchesScreenHeader';
import {View} from 'react-native';

// Screen Names
const homeName = 'Home';
const matchesName = 'Matches';
const groupsName = 'Groups';
const fantacyName = 'Fantacy';
const moreName = 'More';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
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
          tabBarStyle: {backgroundColor: '#335791'},
          headerTitleAlign: 'center',
        })}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen
          name={matchesName}
          component={MatchesScreen}
          options={{
            headerTitle: () => <MatchesScreenHeader />,
            headerLeft: () => (
              <View style={{marginLeft: 15}}>
                <Ionicons name="bag-add-outline" size={30} color="white" />
              </View>
            ),
            headerRight: () => (
              <View style={{marginRight: 15}}>
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color="white"
                />
              </View>
            ),
            headerStyle: {backgroundColor: 'blue'},
          }}
        />
        <Tab.Screen name={groupsName} component={GroupsScreen} />
        <Tab.Screen name={fantacyName} component={FantasyScreen} />
        <Tab.Screen name={moreName} component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
