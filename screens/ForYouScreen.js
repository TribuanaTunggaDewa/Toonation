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
          images : [{     title : 'Bobo dan Paman Gembul',
                          image : 'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/3294_cergam-bobo-paman-gembul-sakit.jpg',
                          episode : [{title: 'Ep. 01',
                                        date: '1 Januari 2019',
                                        image:'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/grid/original/102822_master-karakter-dalam-bobo.jpg'},
                                    {title: 'Ep. 02',
                                    date: '15 Desember 2018',
                                    image:'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/5665_cergam-bobo-paman-gembul-mencoba-rajin.jpg'},
                                    {title: 'Ep. 03',
                                    date: '1 Desember 2018',
                                    image:'https://obs.line-scdn.net/0hxdNbsXJtJ0tzGwsHvJVYHElNJCRAdzRIFy12VSN1eX8OKDNPTChgJVBJcC9WLGAVGn5uKVEYPHpYLGZJRy9g/w644'}]
                        },
                        { title : 'Negri Dongeng',
                          image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVYzvB_6kTjYQ1t1YmjdTxQYKq-pnCK6iqB6_j35Am3A6TIZhPQ',
                          episode : [{title: 'Ep. 01',
                                            date: '1 Januari 2019',
                                            image:'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/5036_kejutan-bintang-malam.jpg'},
                                        {title: 'Ep. 02',
                                        date: '15 Desember 2018',
                                        image:'https://obs.line-scdn.net/0hw0mbKaJoKB9QGwbBpZFXSGpNK3BjdzscNC15AQB1dit0eGceZSgycXMadicoK29BPi1heHAYMy55fGhJOy8y/w644'},
                                        {title: 'Ep. 03',
                                        date: '1 Desember 2018',
                                        image:'https://i.ytimg.com/vi/wzZruK7UBEg/maxresdefault.jpg'}]
                        },
                        {
                          title : 'Paman Kikuk,Husin, dan Asta',
                          image : 'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/14246_paman-kikuk-dan-kura-kura.jpg',
                          episode : [{title: 'Ep. 01',
                                            date: '1 Januari 2019',
                                            image:'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/9842_siasat-paman-kikuk.jpg'},
                                        {title: 'Ep. 02',
                                        date: '15 Desember 2018',
                                        image:'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/2270_gara-gara-iseng.jpg'},
                                        {title: 'Ep. 03',
                                        date: '1 Desember 2018',
                                        image:'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/10589_go-green-ala-paman-kikuk.jpg'}]
                        },
                        {
                          title : 'Bonna And Friends',
                          image : 'https://i.ytimg.com/vi/uBGMlfUi6m8/maxresdefault.jpg',
                          episode : [{title: 'Ep. 01',
                                        date: '1 Januari 2019',
                                        image:'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/9842_siasat-paman-kikuk.jpg'},
                                    {title: 'Ep. 02',
                                    date: '15 Desember 2018',
                                    image:'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/2270_gara-gara-iseng.jpg'},
                                    {title: 'Ep. 03',
                                    date: '1 Desember 2018',
                                    image:'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/10589_go-green-ala-paman-kikuk.jpg'}]
                        }
            
        ],
          favouriteUris : [{    title: 'Siksa Neraka',
                                image: 'https://3.bp.blogspot.com/-OX9qZxIJZKw/WdxAmTK4wWI/AAAAAAAADtM/F5l2UBhsSnEurqmacMR3No1ebDxM1tDggCLcBGAs/s1600/Komik_dahsyatnya_azab_neraka%2Bkomikkoplak.blogspot.com-page-004.jpg',
                                episode : [{title: 'Ep. 01',
                                                date: '1 Januari 2019',
                                                image:'https://cdn.brilio.net/news/2015/07/22/10127/30000-hidayah-.jpg'},
                                            {title: 'Ep. 02',
                                            date: '15 Desember 2018',
                                            image:'https://cdn.brilio.net/news/2015/07/22/10127/30005-hidayah-.jpg'},
                                            {title: 'Ep. 03',
                                            date: '1 Desember 2018',
                                            image:'https://i.pinimg.com/736x/f0/61/d5/f061d5c87ba720e5459ac98210f39389--indonesia.jpg'}]    
                            },
                          {     title: 'Babi Siluman',
                                image: 'https://cdn.brilio.net/news/2015/11/30/29400/109183-tatang-s.jpg',
                                episode : [{title: 'Ep. 01',
                                                date: '1 Januari 2019',
                                                image:'https://uangindonesia.com/wp-content/uploads/2015/12/Cerita-pesugihan-babi-ngepet-yang-sering-tertangkap-warga.jpg'},
                                            {title: 'Ep. 02',
                                            date: '15 Desember 2018',
                                            image:'https://i.ytimg.com/vi/iBSjLmKsUfU/maxresdefault.jpg'},
                                            {title: 'Ep. 03',
                                            date: '1 Desember 2018',
                                            image:'http://2.bp.blogspot.com/-RLsl4-nULjI/UTD3a098F7I/AAAAAAAAA9U/3vpzDOrflVA/s1600/babi-yang-imut2.jpg'}]    },
                          {     title: 'Dendam Si Loreng',
                                image: 'https://2.bp.blogspot.com/-pN2r3170uQg/XBdphUqN_gI/AAAAAAAAK9Q/e-5Ai1LUM9YZ06YcLFAB8CsWjyPJ01EiQCLcBGAs/s1600/Petruk%2BGareng%2BTatang%2BS%2B-%2BDendam%2BSi%2BLoreng%2B01.jpg',
                                episode : [{title: 'Ep. 01',
                                                date: '1 Januari 2019',
                                                image:'https://asset.kompas.com/crops/SqKiMGNC4HNz7YmCzqhrlfkqUlo=/0x0:1000x667/750x500/data/photo/2019/06/24/1705817242.jpg'},
                                            {title: 'Ep. 02',
                                            date: '15 Desember 2018',
                                            image:'https://awsimages.detik.net.id/community/media/visual/2019/09/19/5f33375f-ccfe-4c63-a2a1-f7b796420d0f_169.jpeg?w=780&q=90'},
                                            {title: 'Ep. 03',
                                            date: '1 Desember 2018',
                                            image:'https://i.ytimg.com/vi/oFZP0TNkrbI/maxresdefault.jpg'}]  },
                          {     title: 'Setan Perawan',
                                image: 'https://2.bp.blogspot.com/-eWXm9o6LZ6o/Wgke2tKNftI/AAAAAAAAE0U/5XWqvJcHddIPxDXktmab8Kzo5ty529kfACLcBGAs/s1600/Petruk%2BGareng%2B-%2BSetan%2BPerawan-00.jpg',
                                episode : [{title: 'Ep. 01',
                                            date: '1 Januari 2019',
                                            image:'https://www.arahkita.com/foto/2019/08/25/26-ilustrasi_hantu_net-800x450.jpg'},
                                        {title: 'Ep. 02',
                                        date: '15 Desember 2018',
                                        image:'https://assets.jalantikus.com/assets/cache/720/720/tips/2018/07/20/aplikasi-telepon-setan-7f489.jpg'},
                                        {title: 'Ep. 03',
                                        date: '1 Desember 2018',
                                        image:'https://i.ytimg.com/vi/oFZP0TNkrbI/maxresdefault.jpg'}]
                            },
                          {     title: 'Ririwa',
                                image: 'https://cdn.brilio.net/news/2015/11/30/29400/109182-tatang-s.jpg',
                                episode : [{title: 'Ep. 01',
                                            date: '1 Januari 2019',
                                            image:'https://thefontsmaster.com/wp-content/uploads/2016/05/Ririwa_01-TheFontsMaster.com_-1024x681.jpg'},
                                        {title: 'Ep. 02',
                                        date: '15 Desember 2018',
                                        image:'data:image/jpeg;base64,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'},
                                        {title: 'Ep. 03',
                                        date: '1 Desember 2018',
                                        image:'https://yt3.ggpht.com/a/AGF-l78eeZalLe3JRDaC0gzDM1cTjSdCw_NZcSyCrQ=s900-c-k-c0xffffffff-no-rj-mo'}]

                            }],
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
                                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetilWebtoon', {  item: favouriteUri, data: [...this.state.images, ...this.state.favouriteUris] })}><Image style={{width:100, height:150}} source={{uri:favouriteUri.image}} /></TouchableOpacity>
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