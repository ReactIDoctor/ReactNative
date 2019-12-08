import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ArticlesScreen from '../screens/ArticlesScreen';
import SignInScreen from '../screens/SignInScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    // SignIn: SignInScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Главная',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';


const NotificationStack = createStackNavigator(
  {
    Notification: NotificationScreen,
  },
  config
);

NotificationStack.navigationOptions = {
  tabBarLabel: 'Уведомления',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

NotificationStack.path = '';

// const SignInStack = createStackNavigator(
//     {
//         SignIn: HomeScreen,
//     },
//     config
// );
// SignInStack.navigationOptions = {
//     tabBarLabel: 'Login',
//     tabBarIcon: ({ focused }) => (
//         <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//     ),
// };
// SignInStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = { 
  tabBarLabel: 'Профиль',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

ProfileStack.path = '';

const ArticlesStack = createStackNavigator(
  {
    Articles: ArticlesScreen,
  },
  config
);

ArticlesStack.navigationOptions = { 
  tabBarLabel: 'Статьи',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-journal' : 'md-journal'} />
  ),
};

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ArticlesStack,
  NotificationStack,
  ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
