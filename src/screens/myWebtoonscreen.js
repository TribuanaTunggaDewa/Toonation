import React, { Component } from 'react';
import { Container,Header,Text, Body, Content, Form, Item, Input, Button,Toast,Root, Label,InputGroup, Footer, FooterTab, CardItem,Card, Left, Right, ListItem} from 'native-base'
import {Image,View,StyleSheet,Dimensions,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../datas/styles'
import dataBanner from '../datas/dataBanner'
import dataFavourite from '../datas/dataFavourite'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import {ip} from '../datas/dataIp'


export default class My_webtoon_creation extends Component{
  constructor(props){
    super(props)
    this.state={
      datas: [],
      token: '',
      id : []
    }
  }
  
  async SessionTokenCheck(){
    try{
        const Tokenize = await AsyncStorage.getItem('uToken')
        const iD= await AsyncStorage.getItem('User')
        console.log(iD)
        const idize = JSON.parse(iD)
        if(Tokenize !== null){
            this.setState({token: Tokenize, id: idize})

            console.log('adalah',idize)
            return Tokenize
        }
    }catch(error){
        console.log('Error Storing the Token')
    }
}

async componentDidMount(){
  await this.handleMyWebtoon()
  this.focusListener = this.props.navigation.addListener('didFocus', ()=>{
    this.handleMyWebtoon()
  })
}

 async handleMyWebtoon(){
  await this.SessionTokenCheck() 
  axios.get(`${ip}/api/v1/user/${this.state.id}/webtoons`,{
      headers: {
          'Authorization': 'Bearer '+ this.state.token 
      }
  })
  .then(res=>{
      const datas = res.data
      this.setState({datas})
      console.log(datas)
  }).catch(error => {
      console.log(error.message)
  })

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
            data={this.state.datas} 
            renderItem={({ item }) => this.allPage(item)}
            keyExtractor={item => item.id}
            />
          </Item>
          <Icon name='plus-circle' color='#03A9F4' size={50} onPress={()=> this.props.navigation.navigate('createmyWebtoon')} style={{alignSelf:'flex-end'}} />
          
        </Content>
      </Container>
    )
  }
}