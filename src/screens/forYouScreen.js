        import React, {Component} from 'react'
        import {View, StyleSheet, TouchableOpacity, ScrollView, Image }  from 'react-native'
        import {Container, Title, Content, Text, Header, Thumbnail, Card, CardItem, Item, Label, Input, Button, Body, Left, ListItem} from 'native-base'
        import Icon from 'react-native-vector-icons/FontAwesome'
        import Carousel from 'react-native-banner-carousel'
        import { FlatList } from 'react-native-gesture-handler'
        import dataBanner from '../datas/dataBanner'
        import  dataFavourite  from '../datas/dataFavourite'
        import styles from '../datas/styles'
        import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

        const BannerWidth = 400


        class forYouScreen extends Component {

        constructor(props){
            super(props)
            this.state = {
                images : dataBanner,
                favouriteUris : dataFavourite,
                datas : [],
                favourite: [],
                token: ''
            }
        }

        async SessionTokenCheck(){
            try{
                const Tokenize = await AsyncStorage.getItem('uToken')
                if(Tokenize !== null){
                    this.setState({token: Tokenize})
                    return Tokenize
                }
            }catch(error){
                console.log('Error Storing the Token')
            }
        }

        async componentDidMount(){
            await this.SessionTokenCheck() 
            axios.get('http://192.168.1.13:5000/api/v1/webtoons',{
                headers: {
                    'Authorization': 'Bearer '+ this.state.token 
                }
            })
            .then(res=>{
                const datas = res.data
                this.setState({datas})
                console.log(datas)
            }).catch(error => {
                console.log(error.message)
            })


            axios.get('http://192.168.1.13:5000/api/v1/webtoons?is_favorite=true',{
                headers:{
                    'Authorization': 'Bearer '+ this.state.token
                }
            })
            .then(res=>{
                const favourite = res.data
                this.setState({favourite})
                console.log(datas)
            }).catch(error => {
                console.log(error.message)
            })

        }

        allpage(images){
            return(
                <ListItem rounded>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilWebtoon', {  item: images })} ><Image source={{uri:images.image}} style={styles.imagelist} /></TouchableOpacity>
                    <Body style={styles.textList}>
                        <Text>{images.title}</Text>
                        <Button style={styles.splitButton} ><Text>+ Add Favorite</Text></Button>
                    </Body>
                </ListItem>
            )
        }

        static navigationOptions = {
            header : null
        }


        render(){

            return(
                    <Container>
                        <Header style={styles.header}  searchBar rounded>
                            <Item horizontal style={{padding:10}}>
                                <Input placeholder='Search' />
                                <TouchableOpacity><Icon name='search' size={22  } /></TouchableOpacity>
                            </Item>
                        </Header>
                        <Content >
                            <Item>
                                <Carousel   
                                    autoplay
                                    autoplayTimeout={5000}
                                    loop
                                    index={0}
                                    pageSize={BannerWidth}
                                >
                                    {this.state.images.map((img)=>{
                                        return(
                                            <View key={img.index}>
                                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilWebtoon', {  item: img })}><Image style={styles.imageBanner} source={{ uri:img.image }}  /></TouchableOpacity>
                                            </View>
                                        )
                                    })}
                                </Carousel>
                            </Item>
                            <Item style={styles.secondHeader}>
                            <Text>Favourite</Text>
                            </Item>
                            <Item horizontal style={styles.content} >
                                <ScrollView horizontal >
                                    {this.state.favourite.map((favouriteUri)=>{
                                        return(

                                            <View key={favouriteUri.index}>
                                                <View style={styles.textList}>
                                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilWebtoon', {  item: favouriteUri })}><Image style={styles.imagelist} source={{uri:favouriteUri.image}} /></TouchableOpacity>
                                                <Text style={{textAlign:'center'}}>{favouriteUri.title}</Text>
                                                </View>
                                            </View>                            
                                        )
                                    })} 
                                </ScrollView>
                            </Item>
                            <Item style={styles.secondHeader}>
                                <Text>All</Text>
                            </Item>
                            <FlatList
                            data={this.state.datas}
                            renderItem={({item})=> this.allpage(item) }
                            style={styles.content}
                            >
                            </FlatList>
                            
                        </Content>
                    </Container>

            )} 
        }

        export default forYouScreen