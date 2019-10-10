import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList}  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'


class DetailWebtoonScreen extends Component {

constructor(props){
    super(props)
    this.state = {
        data : props.navigation.state.params.data,
        item : props.navigation.state.params.item
    }
}

onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }



static navigationOptions = {
   title: 'Detail Webtoon',
   headerRight: <TouchableOpacity onPress={this.onShare}><Icon name='share' size={30}  /></TouchableOpacity>
  
}

  render(){
    return(
      <Container>
        <Content>
            <Item>
            <Image style={{width:370, height:270}} source={{uri:this.state.item.image}} />
            </Item>
            <Item>
            <Text>{this.state.item.title}</Text>
            </Item>
            <Item>
            <FlatList
                     data={this.state.item.episode}
                     renderItem={({item})=> {
                         return(
                         <Item>
                           <Image style={{height:200, width:150}} source={{uri:item.image}} />      
                              <View>
                                <Text style={{textAlign: 'justify'}}>{item.title}</Text>
                                <Text style={{textAlign: 'justify'}}>{item.date}</Text>
                                </View>
                         </Item>)
                     }}
                     >
                    </FlatList>
            </Item>
        </Content>
      </Container>
    )
  }
}

export default DetailWebtoonScreen