import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView }  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'




class ForYouScreen extends Component {

  static navigationOptions = {
    header : null
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

export default ForYouScreen