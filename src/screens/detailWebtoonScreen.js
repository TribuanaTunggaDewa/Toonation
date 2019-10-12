import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList}  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../datas/styles'


class detailWebtoonScreen extends Component {

constructor(props){
    super(props)
    this.state = {
        item : props.navigation.state.params.item
    }
}



  render(){
    return(
      <Container>
        <Content>
            <Item>
            <Image style={styles.imageBanner} source={{uri:this.state.item.image}} />
            </Item>
            <Item style={styles.secondHeader}>
            <Text>{this.state.item.title}</Text>
            </Item>
            <Item style={styles.content}>
            <FlatList
                     data={this.state.item.episode}
                     renderItem={({item})=> {
                         return(
                         <Item>
                             <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilEpisode', {frame : item })}><Image style={styles.imagelist} source={{uri:item.image}} /></TouchableOpacity>
                              <View style={styles.textList} > 
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

export default detailWebtoonScreen