import React, { Component } from 'react';
import { Icon,Container,Header,Text, Body, Content, Form, Item, Input, Button,Toast,Root, Label,InputGroup, Footer, FooterTab, CardItem,Card, Left, Right, ListItem} from 'native-base'
import {Image,View,StyleSheet,Dimensions,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import styles from '../datas/styles'


export default class editWebtoonscreen extends Component{
  constructor(props){
    super(props)
    this.state={
      entries: [{
        title: 'Webtoon 1',
        date: '1 Januari 1945',
        image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
      }, {
        title: 'Webtoon 2',
        date: '1 Januari 1945',
        image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
      }, {
        title: 'Webtoon 3',
        date: '1 Januari 1945',
        image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
      },{
        title: 'Webtoon 4',
        date: '1 Januari 1945',
        image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
      }]
    }
  }
  
  allPage(image, index) {
    return (
        <ListItem >
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("", {title :image})} >
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
          <Item>
            <Input></Input>
            
          </Item>
          <Label>
                    <Text>Add Image</Text>
            </Label>  
          <Item>
            <FlatList 
            data={this.state.entries} 
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

