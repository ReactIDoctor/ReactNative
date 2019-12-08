import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from 'react-navigation';


import MainTabNavigator from './MainTabNavigator';

const SignInStack = createStackNavigator({ SignIn: HomeScreen });
const switchNavigator = createSwitchNavigator({
  SignIn: SignInStack,
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator);
