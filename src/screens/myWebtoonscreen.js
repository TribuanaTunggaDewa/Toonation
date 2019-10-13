import React, { Component } from 'react';
import { Container,Header,Text, Body, Content, Form, Item, Input, Button,Toast,Root, Label,InputGroup, Footer, FooterTab, CardItem,Card, Left, Right, ListItem} from 'native-base'
import {Image,View,StyleSheet,Dimensions,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../datas/styles'
import dataBanner from '../datas/dataBanner'
import dataFavourite from '../datas/dataFavourite'


export default class My_webtoon_creation extends Component{
  constructor(props){
    super(props)
    this.state={
      entries: [...dataBanner,...dataFavourite]
    }
  }
  
  allPage(image, index) {
    return (
      <ListItem >
        <Image style={styles.imagelist} source={{uri : image.image}} ></Image>
        <Body style={styles.textList} >
        <Text >{image.title}</Text>
        <Text >{image.episodes}</Text>
        </Body>
      </ListItem>
    );
  }
  
  render() {
    
    return (
      <Container>
        <Content style={styles.content}>
          <Item>
            <FlatList 
            data={this.state.entries} 
            renderItem={({ item }) => this.allPage(item)}
            keyExtractor={item => item.id}
            />
          <Icon name='plus-circle' color='#03A9F4' size={50} onPress={()=> this.props.navigation.navigate('createmyWebtoon') }/>
          </Item>
          
        </Content>
      </Container>
    )
  }
}