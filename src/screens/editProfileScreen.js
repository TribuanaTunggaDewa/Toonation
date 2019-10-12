import React, { Component } from 'react';
import { Container,Header,Text, Body, Content, Form, Item, Input, Button,Toast,Root, Label,InputGroup, Footer, FooterTab, CardItem,Card, Left, Right, ListItem} from 'native-base'
import {Image,View,StyleSheet,Dimensions,ScrollView,FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker'

export default class editProfilescreen extends Component{
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
        <Content>
          <Item style={{borderWidth:0, alignSelf:"center"}}>
              <Image style={{height:200,width:200, borderRadius: 200/ 2, borderWidth:4, borderColor: 'black'}} source={{uri : this.state.photo.uri}}></Image>
              <Icon name='camera' size={30} onPress={this.handleChoosePhoto}/>
          </Item>
          <Item style={{width: 250, marginTop : 20, alignSelf:'center'}}  rounded>
              <Input  />
          </Item>
        </Content>
        
      </Container>
    )
  }
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center'
  },
});