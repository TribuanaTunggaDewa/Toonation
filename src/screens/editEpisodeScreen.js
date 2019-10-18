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


export default class editEpisodeScreen extends Component{
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

            console.log('adalah',idize.id)
            return Tokenize
        }
    }catch(error){
        console.log('Error Storing the Token')
    }
}

async componentDidMount(){
  await this.handleMyEpisode()
  this.props.navigation.setParams({addedEpisode : this.addEpisode})
}


addEpisode = async ()=> {
  await this.SessionTokenCheck()
  await axios.post(`${ip}/api/v1/user/${this.state.id.id}/webtoon/${this.state.item.id}/episode`, {
    title : this.state.title }, {
    headers:{
      'Authorization': 'Bearer '+ this.state.token
    }
  }).then(()=>{
    alert('Added Your Episode')
    this.handleMyEpisode()
  })
}

handleDeleteEpisode= async (Epid) => {
  await this.SessionTokenCheck()
  console.log(Epid)
  axios.delete(`${ip}/api/v1/user/${this.state.id.id}/webtoon/${this.state.item.id}/episode/${Epid}`,{
    headers:{
      'Authorization': 'Bearer '+ this.state.token 
    }
  })
  .then(()=>{
    alert('Episode Deleted')
    this.handleMyEpisode()
  }).catch(error => {
    console.log(error.message)
  })
}


 handleMyEpisode= async ()=> {
  await this.SessionTokenCheck() 
  axios.get(`${ip}/api/v1/user/${this.state.id.id}/webtoon/${this.state.item.id}/episodes`,{
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
        <Icon name='trash' style={{ marginLeft:130}} size={30} color='red' onPress={()=>this.handleDeleteEpisode(image.id)} />
       <Icon name='pencil' style={{marginLeft:130}} size={30}  onPress={()=>this.props.navigation.navigate("editWebtoonEpisode", {item : image})} />
        
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
            <Input style={styles.input}></Input>
            
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
         <Item style={{justifyContent:'center'}}>
             <TouchableOpacity style={styles.oneButton} onPress={()=>this.props.navigation.navigate("")}>
                 <Text style={styles.TextButton} >+ IMAGE</Text>
             </TouchableOpacity>
         </Item>
         <Item style={{justifyContent:'center'}} >
              <TouchableOpacity style={styles.oneButtonDanger}><Text style={styles.TextButton}>DELETE</Text>
              </TouchableOpacity>
         </Item>

        </Content>
      </Container>
    )
  }
};

