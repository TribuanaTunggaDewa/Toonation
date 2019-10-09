import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity }  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {LoginScreen} from './screens/LoginScreen'



class ForYouScreen extends Component {

  static navigationOptions = {
    
  }

  render(){
    return(
    <Container>
      <Content>
        <Item>
          <Text>For You Screen</Text>
          <Button onPress={()=>{this.props.navigation.navigate('DetilWebtoon')}}><Text>Button Bro</Text></Button>
        </Item>
      </Content>
    </Container>
    )} 
}

class FavouriteScreen extends Component {
  render(){
    return(
      <Container>
        <Content>
          <Item>
              <Text>Favorit screen</Text>
          </Item>
        </Content>
      </Container>
    )
  }
}

class ProfileScreen extends Component {
  render(){
    return(
      <Container>
        <Content>
          <Item>
            <Text>Profile screen</Text>
          </Item>
        </Content>
      </Container>
    )
  }
}

class DetailWebtoonScreen extends Component {
  render(){
    return(
      <Container>
        <Content>
          <Item>
            <Text>Detail Webtoon Screen</Text>
            <Button onPress={()=>{this.props.navigation.navigate('DetilEpisode')}}><Text>Button Bro</Text></Button>
          </Item>
        </Content>
      </Container>
    )
  }
}

class DetailEpisodeScreen extends Component {
  render(){
    return(
      <Container>
        <Content>
          <Item>
            <Text>Detail Episode Screen</Text>
          </Item>
        </Content>
      </Container>
    )
  }
}





const switchContainer = createSwitchNavigator({
  login : LoginScreen,
  'For You' : {
    screen : createBottomTabNavigator({
     'For You' : {
       screen: createStackNavigator({
         'For You' :  ForYouScreen,
          DetilWebtoon : DetailWebtoonScreen,
          DetilEpisode : DetailEpisodeScreen
       })
     },
      Favorite : FavouriteScreen,
      Profile  : ProfileScreen
    },{
      headerMode: 'none'
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