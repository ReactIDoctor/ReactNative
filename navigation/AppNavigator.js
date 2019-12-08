import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
 
import MainTabNavigator from './MainTabNavigator';
import SignInScreen from "../screens/SignInScreen";
import RegisterScreen from "../screens/RegisterScreen";

const SignInStack = createStackNavigator({ SignIn: SignInScreen });
const RegisterStack = createStackNavigator({ Register: RegisterScreen });

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
      SignIn: SignInStack,
      Register: RegisterStack,
  })
);
