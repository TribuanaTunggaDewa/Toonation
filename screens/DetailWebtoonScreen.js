import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView }  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'




class DetailWebtoonScreen extends Component {
static navigationOptions = {
   title: 'Detail Webtoon'
}

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

export default DetailWebtoonScreen