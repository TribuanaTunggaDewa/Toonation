import React, { Component } from 'react';
import { Icon,Container,Header,Text, Body, Content, Form, Item, Input, Button,Toast,Root, Label,InputGroup, Footer, FooterTab, CardItem,Card, Left, Right, ListItem} from 'native-base'
import {Image,View,StyleSheet,Dimensions,ScrollView,FlatList} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker'
import styles from '../datas/styles';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import {ip} from '../datas/dataIp'

class profile extends Component{
  
  constructor(props){
    super(props)
    this.state={
       photo:'',
       datas:'',
       token: [],
       id : []
    }
}

async SessionTokenCheck(){
  try{
      const Tokenize = await AsyncStorage.getItem('uToken')
      const iD= await AsyncStorage.getItem('User')
      const idize = JSON.parse(iD)
      console.log(idize)
      if(Tokenize !== null){
          this.setState({token: Tokenize, id : idize})
          return Tokenize
      }else{
        this.props.navigation.navigate('login')
      }
  }catch(error){
      console.log('Error Storing the Token')
  }
}

componentDidMount(){
  this.focusListener = this.props.navigation.addListener('didFocus', ()=>{
    this.handleMyProfile()
  })
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

async handleMyProfile(){
  await this.SessionTokenCheck() 
  axios.get(`${ip}/api/v1/user/${this.state.id}`,{
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

  
  
  render() {
    
    return (
      <Container>
        <Content style={styles.content}>
          <Item style={{borderWidth:0, justifyContent:"center"}}>
              <TouchableOpacity><Image style={styles.circleBorder} source={{uri: this.state.datas.image}} ></Image></TouchableOpacity>
             
          </Item>
          <Item style={{justifyContent:'center'}}><Text>{this.state.datas.username}</Text></Item>
          
          <Item style={{marginTop: 30}} onPress={()=> this.props.navigation.navigate('myWebtoon')  }>
                <Text>Create WebToon</Text>
                <Right>
                <Icon name="arrow-forward"  size={40} />
                </Right>

          </Item>
          <Item style={{justifyContent:'center'}} onPress={()=>{AsyncStorage.removeItem('uToken',()=>{this.props.navigation.navigate('login')})}}>
            <TouchableOpacity style={styles.oneButtonDanger} >
            <Text style={styles.TextButton}>Log Out</Text>
            </TouchableOpacity> 
          </Item>
        </Content>
        
      </Container>
    )
  }
};


export default  profile