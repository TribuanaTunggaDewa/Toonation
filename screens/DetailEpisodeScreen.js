import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView , FlatList, Image}  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'





class DetailEpisodeScreen extends Component {

    constructor(props){
      super(props)
      this.state = {
        item : props.navigation.state.params.frame
      }
    }

    static navigationOptions = {
        title: 'Detail Episode'
      }

      render(){
        return(
          <Container>
            <Content>
                <Item>
                <Text>{this.state.item.title}</Text>
                </Item>
                <FlatList
                     data={this.state.item.frame}
                     renderItem={({item})=> {
                         return(
                         <Item>
                         <Image style={{height:600, width:450}} source={{uri:item}} />
                         </Item>)
                     }}
                     >
                    </FlatList>
            </Content>
          </Container>
        )
      }
}

export default DetailEpisodeScreen