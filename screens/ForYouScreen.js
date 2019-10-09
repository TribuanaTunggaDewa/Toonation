import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView, Image }  from 'react-native'
import {Container, Title, Content, Text, Header, Thumbnail, Card, CardItem, Item, Label, Input, Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import Carousel from 'react-native-banner-carousel'

const BannerWidth = 400
const BannerHeight =  270

const images = [
    'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/3294_cergam-bobo-paman-gembul-sakit.jpg',
    'https://obs.line-scdn.net/0hNbvEkQWEEU1LPD0BhLZuGnFqEiJ4UAJOLwpAUxtST3k2DwVJdA8LI2g8TnxkDlYTJQhdKW41CnxgC1BPfwgL/w644',
    'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/14246_paman-kikuk-dan-kura-kura.jpg',
    'https://i.ytimg.com/vi/uBGMlfUi6m8/maxresdefault.jpg'
]


class ForYouScreen extends Component {

  constructor(props){
      super(props)
      this.state = {
          favouriteUris : ['https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjpkpW7qZDlAhVdIbcAHXd9DykQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.slideshare.net%2Fhilmanabinoebly%2Fkomik-jadul-siksa-kubur&psig=AOvVaw2J5bBxdrXE8Hu0deQNRCDM&ust=1570749701142877',
                          'https://3.bp.blogspot.com/-OX9qZxIJZKw/WdxAmTK4wWI/AAAAAAAADtM/F5l2UBhsSnEurqmacMR3No1ebDxM1tDggCLcBGAs/s1600/Komik_dahsyatnya_azab_neraka%2Bkomikkoplak.blogspot.com-page-004.jpg',
                          'https://cdn.brilio.net/news/2015/11/30/29400/109183-tatang-s.jpg',
                          'https://2.bp.blogspot.com/-pN2r3170uQg/XBdphUqN_gI/AAAAAAAAK9Q/e-5Ai1LUM9YZ06YcLFAB8CsWjyPJ01EiQCLcBGAs/s1600/Petruk%2BGareng%2BTatang%2BS%2B-%2BDendam%2BSi%2BLoreng%2B01.jpg',
                          'https://2.bp.blogspot.com/-eWXm9o6LZ6o/Wgke2tKNftI/AAAAAAAAE0U/5XWqvJcHddIPxDXktmab8Kzo5ty529kfACLcBGAs/s1600/Petruk%2BGareng%2B-%2BSetan%2BPerawan-00.jpg                                                                                                                                                                   ']
      }
  }

  static navigationOptions = {
    header : null
  }

  renderPage(image, index){
      return(
          <View key={index}>
              <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri:image }} />
          </View>
      )
  }


  render(){

    return(
    <>
        <ScrollView>
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Input placeholder='Search' />
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
                            {images.map((image, index)=> this.renderPage(image, index))}
                        </Carousel>
                    </Item>
                    <Item>
                        <ScrollView horizontal>
                            {this.state.favouriteUris.map((favouriteUri,index)=>{
                                return(
                                    <Item><View key={index}><Image style={{width:200, height:200}} source={{uri:favouriteUri}} /></View></Item>
                                )
                            })}
                        </ScrollView>
                    </Item>
                    <Item>
                        <Text>Ini All</Text>
                    </Item>
                </Content>
            </Container>
        </ScrollView>
    </>
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