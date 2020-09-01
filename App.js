import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

import {createMaterialTopNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createTopTabNavigator} from 'react-navigation-tabs';

import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';

export default class App extends React.Component{
  render(){
    return(
      <MaterialTopNavigator/>
      <AppContainer/>
    );
  }
}

const MaterialTopNavigator = createMaterialTopNavigator({
  Write:{screens: WriteScreen},
  Read:{screens: ReadScreen},
});

const TabNavigator = createTopTabNavigator({
  Write:{screens: WriteScreen},
  Read:{screens: ReadScreen},
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
