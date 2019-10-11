import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView, Share }  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs'
import LoginScreen from './screens/LoginScreen'
import ForYouScreen  from './screens/ForYouScreen'
import FavouriteScreen from './screens/FavouriteScreen'
import DetailWebtoonScreen from './screens/DetailWebtoonScreen'
import DetailEpisodeScreen from './screens/DetailEpisodeScreen'
import ProfileScreen from './screens/ProfileScreen'
import EditProfileScreen from './screens/EditProfileScreen'
import myWebtoonscreen from './screens/myWebtoonscreen'
import createMyWebtoonScreen from './screens/createMyWebtoonScreen'
import createWebtoonEpisodeScreen from './screens/createWebtoonEpisodeScreen'
import editWebtoonEpisodeScreen from './screens/editWebtoonEpisodeScreen'
import EditWebtoonscreen from './screens/EditWebtoonscreen'


const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
}



const switchContainer = createSwitchNavigator({
  login : LoginScreen,
  'For You' : {
    screen : createBottomTabNavigator({
     'For You' : {
       screen: createStackNavigator({
         'For You' :  {
           screen : ForYouScreen,
            },
          DetilWebtoon : {
            screen : DetailWebtoonScreen,
            navigationOptions: ({ navigation }) => (console.log(navigation),{
            title: `${navigation.state.params.item.title}`,
            headerRight: < Icon name='share' size={39} onPress={()=>onShare()} />
            }),
          },
          DetilEpisode : {
            screen : DetailEpisodeScreen,
            navigationOptions: ({navigation})=> (console.log(navigation),{
              title: `${navigation.state.params.frame.title}`,
              headerRight: < Icon name='share' size={39} onPress={()=>onShare()} />
            })
          }
       },{
         navigationOptions:{
           tabBarLabel: 'For You',
           tabBarIcon: <Icon name='th-large' size={30} />
         }
       })
     },
      Favorite : {
        screen : createStackNavigator({
          Favorite: FavouriteScreen,
          DetilWebtoon : {
            screen : DetailWebtoonScreen,
            navigationOptions: ({ navigation }) => (console.log(navigation),{
            title: `${navigation.state.params.item.title}`,
            headerRight: < Icon name='share' size={39} onPress={()=>onShare()} />
            }),
          },
          DetilEpisode : {
            screen : DetailEpisodeScreen,
            navigationOptions: ({navigation})=> (console.log(navigation),{
              title: `${navigation.state.params.frame.title}`,
              headerRight: < Icon name='share' size={39} onPress={()=>onShare()} />
            })
          }
          
        }),
        navigationOptions:{
          tabBarLabel: 'Favorite',
          tabBarIcon: <Icon name='star' size={30}/>, 
        }
      },
      Profile  : {
        screen : createStackNavigator({
          Profile : {
            screen :  ProfileScreen,
            navigationOptions : ({navigation}) => {
              return {
                title: 'Profile',
                headerRight: <Icon name='pencil' size={30} onPress = { ()=> navigation.navigate('ProfileEdit')} />
              }
            }
         },
          ProfileEdit : {
            screen : EditProfileScreen, 
            navigationOptions: ({navigation})=> ({
                title: 'Edit Profile',
                headerRight: <Icon name='check' size={39}  onPress={ ()=> navigation.navigate('Profile') }  />
            })
          },
          myWebtoon : {
            screen : myWebtoonscreen,
            navigationOptions:{
                title: 'My Webtoon'
            }
          },
          createmyWebtoon : {
            screen : createMyWebtoonScreen,
              navigationOptions: ({navigation})=> ({
                title: 'My Webtoon',
                headerRight: <Icon name='check' size={39}   />
            })
            },
          createwebtoonEpisode : {
            screen : createWebtoonEpisodeScreen,
            navigationOptions:{
              title : 'Create Episode',
              headerRight: <Icon name='check' size={39}   />
            }
          },
          editWebtoonEpisode : {
            screen: editWebtoonEpisodeScreen,
            navigationOptions: {
              title : 'Edit Episode'
            }
          },
          EditWebtoon: {
            screen: EditWebtoonscreen,
            navigationOptions:{
              title: 'Edit Webtoon'
            }
          }
        })
        ,
        navigationOptions: {
          tabBarLabel:'Profile',
          tabBarIcon: <Icon name='user' size={30} />
        }}
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