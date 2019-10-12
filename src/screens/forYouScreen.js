        import React, {Component} from 'react'
        import {View, StyleSheet, TouchableOpacity, ScrollView, Image }  from 'react-native'
        import {Container, Title, Content, Text, Header, Thumbnail, Card, CardItem, Item, Label, Input, Button, Body, Left, ListItem} from 'native-base'
        import Icon from 'react-native-vector-icons/FontAwesome'
        import Carousel from 'react-native-banner-carousel'
        import { FlatList } from 'react-native-gesture-handler'
        import dataBanner from '../datas/dataBanner'
        import  dataFavourite  from '../datas/dataFavourite'
        import styles from '../datas/styles'

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
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilWebtoon', {  item: images })} ><Image source={{uri:images.image}} /></TouchableOpacity>
                    <Body>
                        <Text>{images.title}</Text>
                        <Button style={styles.buttoncolor} ><Text>+ Add Favorite</Text></Button>
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
                            <Item horizontal>
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
                            <Item>
                            <Text>Favourite</Text>
                            </Item>
                            <Item horizontal >
                                <ScrollView horizontal >
                                    {this.state.favouriteUris.map((favouriteUri)=>{
                                        return(

                                            <View key={favouriteUri.index}>
                                                <View>
                                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilWebtoon', {  item: favouriteUri })}><Image style={styles.imagelist} source={{uri:favouriteUri.image}} /></TouchableOpacity>
                                                </View>
                                                <Text style={{textAlign:'center', marginStart:24}}>{favouriteUri.title}</Text>
                                            </View>                            
                                        )
                                    })} 
                                </ScrollView>
                            </Item>
                            <Item>
                                <Text>All</Text>
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

        export default forYouScreen