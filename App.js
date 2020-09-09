import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

import {createMaterialTopNavigator } from 'react-navigation';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createTopTabNavigator} from 'react-navigation-tabs';

import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';

export default class App extends React.Component {
  render(){
    return (
        <AppContainer />
        
    );
  }
}

/*
const MaterialTopNavigator = createMaterialTopNavigator({
  Write:{screens: WriteScreen},
  Read:{screens: ReadScreen},
});
*/

const switchNavigator = createSwitchNavigator({
  WriteScreen:{screen:WriteScreen},
  ReadScreen:{screen:ReadScreen},
})

const AppContainer =  createAppContainer(switchNavigator);
//const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
