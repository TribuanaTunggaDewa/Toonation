import React, { Component } from 'react';
import { Container,Header,Text, Body, Content, Form, Item, Input, Button,Toast,Root, Label,InputGroup, Footer, FooterTab, CardItem,Card, Left, Right, ListItem} from 'native-base'
import {Image,View,StyleSheet,Dimensions,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import styles from '../datas/styles'
import {ip} from '../datas/dataIp'
import axios from 'axios'

import AsyncStorage from '@react-native-community/async-storage'


export default class editWebtoonscreen extends Component{
  constructor(props){
    super(props)
    this.state={
      item : props.navigation.state.params.item,
      token:'',
      id:[],
      title:'',
      datas:[]
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

            console.log(this.state.item.title)
            return Tokenize
        }
    }catch(error){
        console.log('Error Storing the Token')
    }
}


async componentDidMount(){
  await this.handleMyWebtoon(this.state.item.title)
  this.props.navigation.setParams({uptedWebtoon : this.uptWebtoon})
}

 handleMyWebtoon= async (title)=> {
  await this.SessionTokenCheck() 
  axios.get(`${ip}/api/v1/user/${this.state.id.id}/webtoons?title=${title}`,{
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

uptWebtoon = async ()=> {
  await this.SessionTokenCheck()
  await axios.put(`${ip}/api/v1/user/${this.state.id.id}/webtoon/${this.state.item.id}`, {
    title : this.state.title }, {
    headers:{
      'Authorization': 'Bearer '+ this.state.token
    }
  }).then(()=>{
    alert('Update Your Webtoon')
    this.handleMyWebtoon()
  })
}


  handleDeleteWebtoon= async (wbtnid) => {
    await this.SessionTokenCheck()
    console.log(wbtnid)
    axios.delete(`${ip}/api/v1/user/${this.state.id.id}/webtoon/${wbtnid}`,{
      headers:{
        'Authorization': 'Bearer '+ this.state.token 
      }
    })
    .then(()=>{
      alert('Webtoon Deleted')
      this.handleMyWebtoon()
    }).catch(error => {
      console.log(error.message)
    })
  }




  
  allPage(image, index) {
    return (
        <ListItem>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("createwebtoonEpisode", {title :image})} >
        <Image style={styles.imagelist} source={{uri : image.image}} ></Image>
        </TouchableOpacity>
        <Body style={styles.textList}>
        <Text>{image.title}</Text>
        <Text>{image.createdAt}</Text>
       
        </Body>
      </ListItem>
    );
  }

  
  render() {
    
    return (
      <Container>
        <Content style={styles.content}>
            <Label>
                    <Text>Name</Text>
            </Label>  
          <Item>
          <Input style={styles.input} onChangeText={(title)=>{this.setState({title}), this.props.navigation.setParams({name: this.state.title}) }} value={this.state.title}></Input>
            
          </Item>
          <Label>
                    <Text>Add Image</Text>
            </Label>  
          <Item>
            <FlatList 
            data={this.state.datas} 
            renderItem={({ item }) => this.allPage(item)}
            keyExtractor={item => item.id}
            >
            </FlatList>
         </Item>
         <Item style={{justifyContent: 'center'}}>
             <TouchableOpacity style={styles.oneButton}  onPress={()=>this.props.navigation.navigate("")}>
                 <Text style={styles.TextButton}>+ IMAGE</Text>
             </TouchableOpacity>
         </Item>
         <Item style={{justifyContent:'center'}}>
         <TouchableOpacity style={styles.oneButtonDanger} ><Text style={styles.TextButton}>DELETE</Text>
        </TouchableOpacity>
         </Item>

        </Content>
      </Container>
    )
  }
};

