import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import JudgeScreen from '../screens/JudgeScreen';
import CreateScreen from '../screens/CreateScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';

const JudgeStack = createStackNavigator({
  Judge: JudgeScreen,
});

JudgeStack.navigationOptions = {
  tabBarLabel: 'Judge',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const CreateStack = createStackNavigator({
  Create: CreateScreen,
});

CreateStack.navigationOptions = {
  tabBarLabel: 'Create',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const LeaderboardStack = createStackNavigator({
  Leaderboard: LeaderboardScreen,
});

LeaderboardStack.navigationOptions = {
  tabBarLabel: 'Leaderboards',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  JudgeStack,
  CreateStack,
  LeaderboardStack,
});
