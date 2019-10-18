import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView,FlatList, ListItem, Image }  from 'react-native'
import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button,Body} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import  dataFavourite  from '../datas/dataFavourite'
import styles from '../datas/styles'
import {ip} from '../datas/dataIp'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'




class favouriteScreen extends Component {

  constructor(props){
    super(props)
    this.state = {

       searchdat: [],
       search:'',
       favouriteUris : []
  }
    }

  async componentDidMount(){
    await this.handleFavorite()
  }



    async handleFavorite(){
      await axios.get(`${ip}/api/v1/webtoons?is_favorite=true`)
      .then(res=>{
          const favouriteUris = res.data
          this.setState({favouriteUris})
          console.log(favouriteUris)
      }).catch(error => {
          console.log(error.message)
      })
  }  

  async handleSearch(title){
    axios.get(`${ip}/api/v1/webtoons?title=${title}`)
    .then(res=>{
        const searchdat = res.data
        this.setState({searchdat})
        console.log(searchdat)
    }).catch(error => {
        console.log(error.message)
    })
}
  
    

 

  render(){
    return(
      <Container>
                <Header style={styles.header} searchBar rounded>
                <Item horizontal style={{padding:10}}>
                                <Input placeholder='Search' onChangeText={(search)=>{this.setState({search}), this.setState({searchdat:[]})}} value={this.state.search} />
                                <TouchableOpacity onPress={()=>this.handleSearch(this.state.search)}><Icon name='search' size={22  } /></TouchableOpacity>
                 </Item>
                </Header>
                <Content >
                <Item>
                            {this.state.searchdat.map((favouriteUri)=>{
                                        return(

                                            <View key={favouriteUri.index}>
                                                <View style={styles.textList}>
                                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilWebtoon', {  item: favouriteUri })}><Image style={styles.imagelist} source={{uri:favouriteUri.image}} /></TouchableOpacity>
                                                <Text style={{textAlign:'center'}}>{favouriteUri.title}</Text>
                                                </View>
                                            </View>                            
                                        )
                                    })} 
                            </Item>
                    <Item style={styles.secondHeader}>
                        <Text>My Favorite</Text>
                    </Item>
                    <FlatList
                     data={this.state.favouriteUris}
                     renderItem={({item})=> {
                      return(
                      <Item>
                          <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilWebtoon', {item : item })}><Image style={styles.imagelist} source={{uri:item.image}} /></TouchableOpacity>
                           <View style={styles.textList}>
                             <Text style={{textAlign: 'justify'}}>{item.title}</Text>
                             <Text style={{textAlign: 'justify'}}>{item.createdAt}</Text>
                             </View>
                      </Item>)
                  }}
                     style={styles.content}
                     >
                    </FlatList>
                   
                    
                </Content>
            </Container>
    )
  }
}

export default favouriteScreen