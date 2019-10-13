    import React, {Component} from 'react'
    import {View, StyleSheet, TouchableOpacity, ScrollView, Share }  from 'react-native'
    import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
    import Icon from 'react-native-vector-icons/FontAwesome'
    import {createAppContainer, createSwitchNavigator} from 'react-navigation'
    import {createStackNavigator} from 'react-navigation-stack'
    import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs'
    import loginScreen from './src/screens/loginScreen'
    import forYouScreen  from './src/screens/forYouScreen'
    import favouriteScreen from './src/screens/favouriteScreen'
    import detailWebtoonScreen from './src/screens/detailWebtoonScreen'
    import detailEpisodeScreen from './src/screens/detailEpisodeScreen'
    import profileScreen from './src/screens/profileScreen'
    import editProfileScreen from './src/screens/editProfileScreen'
    import myWebtoonscreen from './src/screens/myWebtoonscreen'
    import createWebtoonScreen from './src/screens/createWebtoonScreen'
    import createEpisodeScreen from './src/screens/createEpisodeScreen'
    import editEpisodeScreen from './src/screens/editEpisodeScreen'
    import editWebtoonscreen from './src/screens/editWebtoonscreen'
    import styles from './src/datas/styles'


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
      login : loginScreen,
      'For You' : {
        screen : createBottomTabNavigator({
        'For You' : {
          screen: createStackNavigator({
            'For You' :  {
              screen : forYouScreen,
                },
              DetilWebtoon : {
                screen : detailWebtoonScreen,
                navigationOptions: ({ navigation }) => (console.log(navigation),{
                title: `${navigation.state.params.item.title}`,
                headerRight: < Icon name='share-alt' size={25} onPress={()=>onShare()} />,
                headerStyle:{
                  backgroundColor: '#009688',
                }
                }),
              },
              DetilEpisode : {
                screen : detailEpisodeScreen,
                navigationOptions: ({navigation})=> (console.log(navigation),{
                  title: `${navigation.state.params.frame.title}`,
                  headerRight: < Icon name='share-alt' size={25}  onPress={()=>onShare()} />,
                  headerStyle:{
                    backgroundColor: '#009688'
                  }
                })
              }
          },{
            navigationOptions:{
              tabBarLabel: 'For You',
              tabBarIcon: ({tintColor}) => <Icon name='th-large' size={30} color={tintColor} />,
              tabBarOptions:{
                activeTintColor: 'white',
                inactiveBackgroundColor: '#00796B',
                activeBackgroundColor: '#009688'
              }
              
            }
          })
        },
          Favorite : {
            screen : createStackNavigator({
              Favorite: {
                screen : favouriteScreen,
                navigationOptions: {
                  header : null
                }
              },
              DetilWebtoon : {
                screen : detailWebtoonScreen,
                navigationOptions: ({ navigation }) => (console.log(navigation),{
                title: `${navigation.state.params.item.title}`,
                headerRight: < Icon name='share-alt' size={25}  onPress={()=>onShare()} />,
                headerStyle:{
                  backgroundColor: '#009688'
                }
                }),
              },
              DetilEpisode : {
                screen : detailEpisodeScreen,
                navigationOptions: ({navigation})=> (console.log(navigation),{
                  title: `${navigation.state.params.frame.title}`,
                  headerRight: < Icon name='share-alt' size={25}  onPress={()=>onShare()} />,
                  headerStyle:{
                    backgroundColor: '#009688'
                  }
                })
              }
              
            }),
            navigationOptions:{
              tabBarLabel: 'Favorite',
              tabBarIcon: ({tintColor}) => <Icon name='star' size={30} color={tintColor} />,
              tabBarOptions:{
                activeTintColor: 'white',
                inactiveBackgroundColor: '#00796B',
                activeBackgroundColor: '#009688'
              }
            }
          },
          Profile  : {
            screen : createStackNavigator({
              Profile : {
                screen :  profileScreen,
                navigationOptions : ({navigation}) => {
                  return {
                    title: 'Profile',
                    headerRight: <Icon name='pencil' size={30} onPress = { ()=> navigation.navigate('ProfileEdit')} />,
                    headerStyle:{
                      backgroundColor: '#009688'
                    }
                  }
                }
            },
              ProfileEdit : {
                screen : editProfileScreen, 
                navigationOptions: ({navigation})=> ({
                    title: 'Edit Profile',
                    headerRight: <Icon name='check' size={20}  onPress={ ()=> navigation.navigate('Profile') }  />,
                    headerStyle:{
                      backgroundColor: '#009688'
                    }
                })
              },
              myWebtoon : {
                screen : myWebtoonscreen,
                navigationOptions:{
                    title: 'My Webtoon',
                    headerStyle:{
                      backgroundColor: '#009688'
                    }
                }
              },
              createmyWebtoon : {
                screen : createWebtoonScreen,
                  navigationOptions: ({navigation})=> ({
                    title: 'My Webtoon',
                    headerRight: <Icon name='check' size={20}   />,
                    headerStyle:{
                      backgroundColor: '#009688'
                    }
                })
                },
              createwebtoonEpisode : {
                screen : createEpisodeScreen,
                navigationOptions:{
                  title : 'Create Episode',
                  headerRight: <Icon name='check' size={20}   />,
                  headerStyle:{
                    backgroundColor: '#009688'
                  }
                }
              },
              editWebtoonEpisode : {
                screen: editEpisodeScreen,
                navigationOptions: {
                  title : 'Edit Episode',
                  headerStyle:{
                    backgroundColor: '#009688'
                  }
                }
              },
              EditWebtoon: {
                screen: editWebtoonscreen,
                navigationOptions:{
                  title: 'Edit Webtoon',
                  headerStyle:{
                    backgroundColor: '#009688'
                  }
                }
              }
            })
            ,
            navigationOptions: {
              tabBarLabel:'Profile',
              tabBarIcon: ({tintColor}) => <Icon name='user' size={30} color={tintColor} />,
              tabBarOptions: {
                activeTintColor: 'white',
                inactiveBackgroundColor: '#00796B',
                activeBackgroundColor: '#009688'
              }
            }}
        }),
      } 
    },{
      initialRouteName : 'For You'
    })


    const AppContainer = createAppContainer(switchContainer)
    export default class App extends Component {
      render(){
        return (<AppContainer/>)
      }
    }