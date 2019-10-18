import React, { Component } from 'react';
import { Icon,Container,Header,Text, Body, Content, Form, Item, Input, Button,Toast,Root, Label,InputGroup, Footer, FooterTab, CardItem,Card, Left, Right, ListItem} from 'native-base'
import {Image,View,StyleSheet,Dimensions,ScrollView,FlatList} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker'
import styles from '../datas/styles';
import AsyncStorage from '@react-native-community/async-storage';

class profile extends Component{
  
  constructor(props){
    super(props)
    this.state={
       photo:'',
       user:'',
       token: []
    }
}

async SessionTokenCheck(){
  try{
      const Tokenize = await AsyncStorage.getItem('uToken')
      if(Tokenize !== null){
          this.setState({token: Tokenize})
          return Tokenize
      }else{
        this.props.navigation.navigate('login')
      }
  }catch(error){
      console.log('Error Storing the Token')
  }
}

componentDidMount(){
  this.SessionTokenCheck()
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


async handleProfile(){
  user = await AsyncStorage.getItem('User')
  console.log(user)
  this.setState({user : user.username})
}

  
  
  render() {
    
    return (
      <Container>
        <Content style={styles.content}>
          <Item style={{borderWidth:0, justifyContent:"center"}}>
              <TouchableOpacity><Image style={styles.circleBorder} ></Image></TouchableOpacity>
             
          </Item>
          <Item><Text>{this.state.user}</Text></Item>
          
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