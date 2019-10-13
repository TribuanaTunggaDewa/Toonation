import React, { Component } from 'react';
import { Container,Header,Text, Body, Content, Form, Item, Input, Button,Toast,Root, Label,InputGroup, Footer, FooterTab, CardItem,Card, Left, Right, ListItem} from 'native-base'
import {Image,View,StyleSheet,Dimensions,ScrollView,FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker'
import styles  from '../datas/styles'

class editProfilescreen extends Component{
  constructor(props){
    super(props)
    this.state={
      photo:''
    }
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
  
  
  render() {
    
    return (
      <Container>
        <Content style={styles.content}>
          <Item style={{borderWidth:0, justifyContent:"center"}}>
              <Image style={styles.circleBorder} source={{uri : this.state.photo.uri}}></Image>
              <Icon name='camera' size={30} onPress={this.handleChoosePhoto}/>
          </Item>
          <Item>
              <Input />
          </Item>
        </Content>
        
      </Container>
    )
  }
}

export default editProfilescreen