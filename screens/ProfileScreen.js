import React, { Component } from 'react';
import { Icon,Container,Header,Text, Body, Content, Form, Item, Input, Button,Toast,Root, Label,InputGroup, Footer, FooterTab, CardItem,Card, Left, Right, ListItem} from 'native-base'
import {Image,View,StyleSheet,Dimensions,ScrollView,FlatList} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker'

export default class Profile extends Component{
  
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
          <Item style={{borderWidth:0, justifyContent:"center"}}>
              <TouchableOpacity><Image style={{height:200,width:200}} source={{uri : 'https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-female-circle2-512.png'}}></Image></TouchableOpacity>
             
          </Item>
          
          <Item onPress={()=> this.props.navigation.navigate('myWebtoon')  }>
                <Text>Create WebToon</Text>
                <Right>
                <Icon name="arrow-forward"  size={40} />
                </Right>

          </Item>
          <Item>
            <TouchableOpacity style={{width:Dimensions.get('window').width}} >
            <Text>Log Out</Text>
            </TouchableOpacity> 
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