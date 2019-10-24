import React, { Component } from 'react';
import { Icon,Container,Header,Text, Body, Content, Form, Item, Input, Button,Toast,Root, Label,InputGroup, Footer, FooterTab, CardItem,Card, Left, Right, ListItem} from 'native-base'
import {Image,View,StyleSheet,Dimensions,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import styles from '../datas/styles'
import dataBanner from '../datas/dataBanner'
import dataFavourite from '../datas/dataFavourite'
import axios from 'axios'
import {ip} from '../datas/dataIp'
import AsyncStorage from '@react-native-community/async-storage'
import ImagePicker from 'react-native-image-picker'


export default class editEpisodeScreen extends Component{
  constructor(props){
    super(props)
    this.state={
      photo:'',
      olditem: props.navigation.state.params.olditem,
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

            console.log('adalah',idize)
            return Tokenize
        }
    }catch(error){
        console.log('Error Storing the Token')
    }
}

async componentDidMount(){
  await this.handleMyEpisode(this.state.item.title)
  this.props.navigation.setParams({uptEpisode : this.uptEpisode})
  console.log(this.state.item)

}

handleChoosePhoto=()=>{
  const option = {
    noData : true
  }
  ImagePicker.launchImageLibrary(option, response => {
    if(response.uri){
      this.setState({ photo: response})
    }
  })
}


uptEpisode = async ()=> {
  await this.SessionTokenCheck()

  const createFormData = (photo, body) => {
    let data = new FormData();
  
    data.append('image', {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
    })
  
    Object.keys(body).forEach(key => {
      data.append(key, body[key])
    })
    console.log('data' ,data)
    return data
    
  }
  console.log('tokennya ini', this.state.token)

  axios.put(`${ip}/api/v1/user/${this.state.id}/webtoon/${this.state.olditem.id}/episode/${this.state.item.id}`,createFormData(this.state.photo, 
    {
      title : this.state.title
    }), {
    headers:{
      'Authorization': 'Bearer '+ this.state.token
    }
  }).then(()=>{
    alert('Update Your Episode')
    this.handleMyEpisode()
  })
}




 handleMyEpisode= async (title)=> {
  await this.SessionTokenCheck() 
  axios.get(`${ip}/api/v1/user/${this.state.id}/webtoon/${this.state.olditem.id}/episodes?title=${title}`,{
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
        <ListItem>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("editWebtoonEpisode", {title :image})} >
        <Image style={styles.imagelist} source={{uri : image.image}} ></Image>
        </TouchableOpacity>
        <Body style={styles.textList}>
        <Text>{image.title}</Text>        
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
          <Item >
            <Input style={styles.input} onChangeText={(title)=>{this.setState({title}), this.props.navigation.setParams({name: this.state.title}) }} value={this.state.title}></Input>
            
          </Item>
          <Item style={{justifyContent: 'center'}}>
             <Image style={styles.imagelist} source={{uri : this.state.photo.uri}}></Image>
             <TouchableOpacity style={styles.oneButton} onPress={this.handleChoosePhoto}>
                 <Text style={styles.TextButton}>+ IMAGE</Text>
             </TouchableOpacity>
         </Item>
          <Item>
            <FlatList 
            data={this.state.datas} 
            renderItem={({ item }) => this.allPage(item)}
            keyExtractor={item => item.id}
            >
            </FlatList>
         </Item>
        </Content>
      </Container>
    )
  }
};

