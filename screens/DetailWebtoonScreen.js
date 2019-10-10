import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList}  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'


class DetailWebtoonScreen extends Component {

constructor(props){
    super(props)
    this.state = {
        item : props.navigation.state.params.item
    }
}


static navigationOptions = {
    title: 'Detail'
  }

  render(){
    return(
      <Container>
        <Content>
            <Item>
            <Image style={{width:370, height:270}} source={{uri:this.state.item.image}} />
            </Item>
            <Item>
            <Text>{this.state.item.title}</Text>
            </Item>
            <Item>
            <FlatList
                     data={this.state.item.episode}
                     renderItem={({item})=> {
                         return(
                         <Item>
                             <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilEpisode', item)}><Image style={{height:200, width:150}} source={{uri:item.image}} /></TouchableOpacity>
                              <View>
                                <Text style={{textAlign: 'justify'}}>{item.title}</Text>
                                <Text style={{textAlign: 'justify'}}>{item.date}</Text>
                                </View>
                         </Item>)
                     }}
                     >
                    </FlatList>
            </Item>
        </Content>
      </Container>
    )
  }
}

export default DetailWebtoonScreen