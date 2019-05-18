import React, { Component } from 'react';
import { Constants } from 'expo';
import {createStackNavigator,createAppContainer,StackActions,NavigationActions} from 'react-navigation';
import {AppRegistry} from 'react-native';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';
import PlayScreen from './PlayScreen';




export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home:{
      screen:HomeScreen,
    },
    List:{
      screen: ListScreen,
    },
    Details:{
      screen: DetailScreen,
    },
    Play:{
      screen: PlayScreen,
    },
    About:{
      screen:AboutScreen,
    },
  },
  {
    initialRouteName:'Home',
  },
);

const AppContainer=createAppContainer(AppNavigator);


