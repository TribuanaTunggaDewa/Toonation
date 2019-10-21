import React, { Component } from 'react';
import { Container,Header,Text, Body, Content, Form, Item, Input, Button,Toast,Root, Label,InputGroup, Footer, FooterTab, CardItem,Card, Left, Right, ListItem} from 'native-base'
import {Image,View,StyleSheet,Dimensions,ScrollView,FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker'
import styles  from '../datas/styles'
import axios from 'axios'
import {ip} from '../datas/dataIp'
import AsyncStorage from '@react-native-community/async-storage'

class editProfilescreen extends Component{
  constructor(props){
    super(props)
    this.state={
       photo:'',
       datas:'',
       token: [],
       id : [],
       text: ''
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
  this.handleMyProfile()
  this.props.navigation.setParams({uptedProfile : this.handleUptProfile})
}

handleChoosePhoto=()=>{
  const option = {
    noData : true
  }
  ImagePicker.launchImageLibrary(option, response => {
    if(response.uri){
      this.setState({ photo: response})
      console.log(this.state.photo)
    }
  })
}

async handleUptProfile(){
  console.log(this.state.photo)
  const dataImage = new FormData()
  dataImage.append('image', this.state.photo.path)
  await axios.put(`${ip}/api/v1/user/${this.state.id}`,dataImage,
   {headers:{ 'Authorization': 'Bearer '+ this.state.token, 'Content-Type': 'multipart/form-data' } })
  .then(response => {
      res.send(response)
      alert('Success Profile Updated')})
      this.handleMyProfile()
  .catch(err=>{
    res.send(err)
    alert('Profile Update Failed')
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
              <Image style={styles.circleBorder} source={{uri : this.state.photo.uri}}></Image>
              <Icon name='camera' size={30} onPress={this.handleChoosePhoto}/>
          </Item>
          <Item style={{justifyContent:'center'}}>
            <Text>
              {this.state.datas.username}
            </Text>
          </Item>

          <Item>
              <Input style={styles.input} onChangeText={(text)=>{this.setState({text})}} value={this.state.text}/>
          </Item>
        </Content>
        
      </Container>
    )
  }
}

export default editProfilescreen