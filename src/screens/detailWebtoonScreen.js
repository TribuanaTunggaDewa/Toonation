import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList}  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../datas/styles'
import axios from 'axios'


class detailWebtoonScreen extends Component {

constructor(props){
    super(props)
    this.state = {
        item : props.navigation.state.params.item,
        datas: []
    }
}

componentDidMount(){
  axios.get(`http://192.168.1.13:5000/api/v1/webtoon/${this.state.item.id}/episodes`)
  .then(res=>{
      const datas = res.data
      this.setState({datas})
      console.log(datas)
  }).catch(error => {
      console.log(error.message)
  })
}



  render(){
    return(
      <Container>
        <Content>
            <Item>
            <Image style={styles.imageBanner} source={{uri:this.state.datas.image}} />
            </Item>
            <Item style={styles.secondHeader}>
            <Text>{this.state.datas.title}</Text>
            </Item>
            <Item style={styles.content}>
            <FlatList
                     data={this.state.datas}
                     renderItem={({item})=> {
                         return(
                         <Item>
                             <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilEpisode', {frame : item })}><Image style={styles.imagelist} source={{uri:item.image}} /></TouchableOpacity>
                              <View style={styles.textList} > 
                                <Text style={{textAlign: 'justify'}}>{item.title}</Text>
                                <Text style={{textAlign: 'justify'}}>{item.createdAt}</Text>
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