import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView, Image }  from 'react-native'
import {Container, Title, Content, Text, Header, Thumbnail, Card, CardItem, Item, Label, Input, Button, Body, Left, ListItem} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import Carousel from 'react-native-banner-carousel'
import { FlatList } from 'react-native-gesture-handler'

const BannerWidth = 400
const BannerHeight =  270


class ForYouScreen extends Component {

  constructor(props){
      super(props)
      this.state = {
          images : [{ title : 'Bobo dan Paman Gembul',
                          image : 'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/3294_cergam-bobo-paman-gembul-sakit.jpg'},
                        { title : 'Negri Dongeng',
                          image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVYzvB_6kTjYQ1t1YmjdTxQYKq-pnCK6iqB6_j35Am3A6TIZhPQ'},
                        {
                          title : 'Paman Kikuk,Husin, dan Asta',
                          image : 'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/14246_paman-kikuk-dan-kura-kura.jpg'
                        },
                        {
                          title : 'Bonna And Friends',
                          image : 'https://i.ytimg.com/vi/uBGMlfUi6m8/maxresdefault.jpg'
                        }
            
        ],
          favouriteUris : [{    title: 'Siksa Neraka',
                                image: 'https://3.bp.blogspot.com/-OX9qZxIJZKw/WdxAmTK4wWI/AAAAAAAADtM/F5l2UBhsSnEurqmacMR3No1ebDxM1tDggCLcBGAs/s1600/Komik_dahsyatnya_azab_neraka%2Bkomikkoplak.blogspot.com-page-004.jpg'},
                          {     title: 'Babi Siluman',
                                image: 'https://cdn.brilio.net/news/2015/11/30/29400/109183-tatang-s.jpg'},
                          {     title: 'Dendam Si Loreng',
                                image: 'https://2.bp.blogspot.com/-pN2r3170uQg/XBdphUqN_gI/AAAAAAAAK9Q/e-5Ai1LUM9YZ06YcLFAB8CsWjyPJ01EiQCLcBGAs/s1600/Petruk%2BGareng%2BTatang%2BS%2B-%2BDendam%2BSi%2BLoreng%2B01.jpg'},
                          {     title: 'Setan Perawan',
                                image: 'https://2.bp.blogspot.com/-eWXm9o6LZ6o/Wgke2tKNftI/AAAAAAAAE0U/5XWqvJcHddIPxDXktmab8Kzo5ty529kfACLcBGAs/s1600/Petruk%2BGareng%2B-%2BSetan%2BPerawan-00.jpg'},
                          {     title: 'Ririwa',
                                image: 'https://cdn.brilio.net/news/2015/11/30/29400/109182-tatang-s.jpg'}],
      }
  }

 allpage(images){
     return(
         <ListItem>
             <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilWebtoon')} ><Image style={{height:200, width:150}} source={{uri:images.image}} /></TouchableOpacity>
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
                                        <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri:img.image }}  />
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
                                        <Image style={{width:100, height:150}} source={{uri:favouriteUri.image}} />
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

export default ForYouScreen