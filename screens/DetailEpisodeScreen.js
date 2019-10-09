import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView }  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'





class DetailEpisodeScreen extends Component {

  static navigationOptions = {
    title: 'Detail Episode'
  }

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

export default DetailEpisodeScreen