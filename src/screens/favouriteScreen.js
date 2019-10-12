import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView,FlatList, ListItem, Image }  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button,Body} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import  dataFavourite  from '../datas/dataFavourite'
import styles from '../datas/styles'


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
                <Header style={styles.header} searchBar rounded>
                    <Item horizontal>
                        <Input placeholder='Search' />
                        <TouchableOpacity><Icon name='search' size={22  } /></TouchableOpacity>
                    </Item>
                </Header>
                <Content >
                    <Item style={styles.secondHeader}>
                        <Text>My Favorite</Text>
                    </Item>
                    <FlatList
                     data={this.state.favouriteUris}
                     renderItem={({item})=> {
                      return(
                      <Item>
                          <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilWebtoon', {item : item })}><Image style={styles.imagelist} source={{uri:item.image}} /></TouchableOpacity>
                           <View style={styles.textList}>
                             <Text style={{textAlign: 'justify'}}>{item.title}</Text>
                             <Text style={{textAlign: 'justify'}}>{item.episode[0].date}</Text>
                             </View>
                      </Item>)
                  }}
                     style={styles.content}
                     >
                    </FlatList>
                   
                    
                </Content>
            </Container>
    )
  }
}

export default favouriteScreen