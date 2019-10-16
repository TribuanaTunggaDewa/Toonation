import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView , FlatList, Image}  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'





class detailEpisodeScreen extends Component {

    constructor(props){
      super(props)
      this.state = {
        item : props.navigation.state.params.frame,
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
                <Text>{console.log(JSON.stringify(this.props.navigation))}</Text>
                </Item>
                <FlatList
                     data={this.state.datas}
                     renderItem={({item})=> {
                         return(
                         <Item>
                         <Image style={{height:600, width:450}} source={{uri:item.image}} />
                         </Item>)
                     }}
                     >
                    </FlatList>
            </Content>
          </Container>
        )
      }
}

export default detailEpisodeScreen