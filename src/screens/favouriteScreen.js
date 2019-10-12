import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView,FlatList, ListItem, Image }  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button,Body} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import  dataFavourite  from '../data/dataFavourite'


class favouriteScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      favouriteUris : dataFavourite

  }
    }
  

 

  render(){
    return(
      <Container>
                <Header style={{backgroundColor:'#3D3C3A'}} searchBar rounded>
                    <Item horizontal>
                        <Input placeholder='Search' />
                        <TouchableOpacity><Icon name='search' size={22  } /></TouchableOpacity>
                    </Item>
                </Header>
                <Content >
                    <Item style={{backgroundColor:'#3D3C3A'}}>
                        <Text style={{color:'white', fontSize:18}}>My Favorite</Text>
                    </Item>
                    <FlatList
                     data={this.state.favouriteUris}
                     renderItem={({item})=> {
                      return(
                      <Item>
                          <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilWebtoon', {item : item })}><Image style={{height:200, width:150}} source={{uri:item.image}} /></TouchableOpacity>
                           <View>
                             <Text style={{textAlign: 'justify'}}>{item.title}</Text>
                             <Text style={{textAlign: 'justify'}}>{item.date}</Text>
                             </View>
                      </Item>)
                  }}
                     
                     >
                    </FlatList>
                   
                    
                </Content>
            </Container>
    )
  }
}

export default favouriteScreen