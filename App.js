//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator,
   createBottomTabNavigator, createAppContainer } from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen'
import DashBoardScreen from './screens/DashBoardScreen';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
class App extends Component {
  render() {
    return <AppContainer />
  }
}
 class Settings extends Component {
  render() {
    return (
      <View>
        <Text> Settings </Text>
      </View>
    )
  }
}
class Profile extends Component {
  render() {
    return (
      <View>
        <Text> profile </Text>
      </View>
    )
  }
}

const DashBoardTabNavigator = createBottomTabNavigator({
  Settings,
  Profile
},{
  navigationOptions: ({navigation})=>{
    let {routeName} = navigation.state.routes[navigation.state.index];
    let headerTitle = routeName;
    return {
    headerTitle,
    };

  }
});
const DashBoardStackNavigator = createStackNavigator({
  DashBoardTabNavigator : DashBoardTabNavigator

},{
  defaultNavigationOptions : ({navigation}) => {
     return {
       headerLeft : (
        <Icon style = {StyleSheet.titleIcon}
        name="md-man"
        color="#ccc"
        size={25}
      />
       )
     };
  }
});
// create a component
const AppDrawNavigator = createDrawerNavigator({
  DashBoard:{
    screen : DashBoardStackNavigator
  }
});


const AppSwitchNavigator = createSwitchNavigator({
  Welcome : {screen : WelcomeScreen},
  DashBoard : {screen : AppDrawNavigator}
});

const AppContainer = createAppContainer(AppSwitchNavigator);
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  titleIcon : {
    paddingLeft : 10
  }
});

//make this component available to the app
export default App;
