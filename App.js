import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView }  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import LoginScreen from './screens/LoginScreen'
import ForYouScreen  from './screens/ForYouScreen'
import FavouriteScreen from './screens/FavouriteScreen'
import DetailWebtoonScreen from './screens/DetailWebtoonScreen'
import DetailEpisodeScreen from './screens/DetailEpisodeScreen'
import ProfileScreen from './screens/ProfileScreen'


const switchContainer = createSwitchNavigator({
  login : LoginScreen,
  'For You' : {
    screen : createBottomTabNavigator({
     'For You' : {
       screen: createStackNavigator({
         'For You' :  {
           screen : ForYouScreen,
            },
          DetilWebtoon : DetailWebtoonScreen,
          DetilEpisode : DetailEpisodeScreen
       })
     },
      Favorite : FavouriteScreen,
      Profile  : ProfileScreen
    })
  } 
},{
  initialRouteName : 'login'
})


const AppContainer = createAppContainer(switchContainer)


const style = StyleSheet.create({
  Container :{
    margin : 20,
    paddingTop: 30
  },
  ContainerTitle:{
    alignContent:'center',
    paddingTop : 50
  },
  Title : {
    alignContent:'center',
    textAlign:'center',
    fontSize: 36
  },
  ContainerContent:{
    paddingTop: 20
  },
  Label:{
    fontSize: 18,
  }
})

export default class App extends Component {
  render(){
    return (<AppContainer/>)
  }
}