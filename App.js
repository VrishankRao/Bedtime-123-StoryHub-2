import React from 'react';
import {StyleSheet, Text, View ,Image} from 'react-native';

import {createMaterialTopNavigator } from 'react-navigation';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render(){
    return (
        <AppContainer/>
        
    );
  }
}

/*
const MaterialTopNavigator = createMaterialTopNavigator({
  Write:{screens: WriteScreen},
  Read:{screens: ReadScreen},
});
*/

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteScreen},
  Read: {screen: ReadScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Read"){
        return(
          <Image
          source={require('./assets/read.png')}
          style={{width:50, height:30}}/>
        ) 
      }
      else if(routeName === "Write"){
        return(
          <Image
          source={require('./assets/write.png')}
          style={{width:50, height:40}}/>
          )
      }
    }
  })
}
);

const switchNavigator = createSwitchNavigator({
  TabNavigator:{screen:TabNavigator},
  HomeScreen:{screen:HomeScreen}
})

const AppContainer =  createAppContainer(switchNavigator);

const styling = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
