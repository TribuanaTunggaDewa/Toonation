        import React, {Component} from 'react'
        import {View, StyleSheet, TouchableOpacity, ScrollView, Image }  from 'react-native'
        import {Container, Title, Content, Text, Header, Thumbnail, Card, CardItem, Item, Label, Input, Button, Body, Left, ListItem} from 'native-base'
        import Icon from 'react-native-vector-icons/FontAwesome'
        import Carousel from 'react-native-banner-carousel'
        import { FlatList } from 'react-native-gesture-handler'
        import dataBanner from '../data/dataBanner'
        import  dataFavourite  from '../data/dataFavourite'

        const BannerWidth = 400
        const BannerHeight =  270


        class forYouScreen extends Component {

        constructor(props){
            super(props)
            this.state = {
                images : dataBanner,
                favouriteUris : dataFavourite
            }
        }

        allpage(images){
            return(
                <ListItem>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilWebtoon', {  item: images })} ><Image style={{height:200, width:150}} source={{uri:images.image}} /></TouchableOpacity>
                    <Body>
                        <Text>{images.title}</Text>
                        <Button warning ><Text>+ Add Favorite</Text></Button>
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
                        <Header style={{backgroundColor:'#3D3C3A'}} searchBar rounded>
                            <Item horizontal>
                                <Input placeholder='Search' />
                                <TouchableOpacity><Icon name='search' size={22  } /></TouchableOpacity>
                            </Item>
                        </Header>
                        <Content >
                            <Item style={styles.container}>
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
                                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilWebtoon', {  item: img })}><Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri:img.image }}  /></TouchableOpacity>
                                            </View>
                                        )
                                    })}
                                </Carousel>
                            </Item>
                            <Item horizontal style={{backgroundColor:'#3D3C3A'}}>
                                <Text style={{color:'white', fontSize:18, flexWrap:'wrap-reverse'}}>Favourite</Text>
                                <ScrollView horizontal style={{backgroundColor:'white', flex:1, marginLeft:0}}>
                                    {this.state.favouriteUris.map((favouriteUri)=>{
                                        return(

                                            <View key={favouriteUri.index}>
                                                <View>
                                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilWebtoon', {  item: favouriteUri })}><Image style={{width:100, height:150}} source={{uri:favouriteUri.image}} /></TouchableOpacity>
                                                </View>
                                                <Text style={{textAlign:'center'}}>{favouriteUri.title}</Text>
                                            </View>                            
                                        )
                                    })} 
                                </ScrollView>
                            </Item>
                            <Item style={{backgroundColor:'#3D3C3A'}}>
                                <Text style={{color:'white', fontSize:18}}>All</Text>
                            </Item>
                            <FlatList
                            data={[...this.state.favouriteUris,...this.state.images]}
                            renderItem={({item})=> this.allpage(item) }
                            >
                            </FlatList>
                            
                        </Content>
                    </Container>

            )} 
        }

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                justifyContent: 'center'
            },
        })

        export default forYouScreen