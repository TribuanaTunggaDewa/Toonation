import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity }  from 'react-native'

class App extends Component {

  render(){
    return(
      <View style={style.Container}>
        <View style={style.ContainerTitle}>
          <Text style={style.Title}>LOG IN</Text>
          <Text style={{textAlign:'center', letterSpacing:2}}>Login with your account Toonation</Text>
        </View>
        <View style={style.ContainerContent}>
          <Text style={style.Label,{marginTop:20}}>Email</Text>
          <TextInput style={{ borderColor: 'black', borderWidth:2, height: 40}} />
          <Text style={style.Label,{marginTop:20}}>Password</Text>
          <TextInput style={{ borderColor: 'black', borderWidth:2, height: 40}} />
          <TouchableOpacity style={{backgroundColor:'grey', borderWidth: 2, height: 35, marginTop: 20}}><Text style={{textAlign:"center", color:'white', fontSize: 18}}>Log IN</Text></TouchableOpacity>
        </View>
      </View>
    )
  }

}

const style = StyleSheet.create({
  Container :{
    margin : 20,
    paddingTop: 30
  },
  ContainerTitle:{
    alignContent:'center',
    paddingTop : 50
  },
  Title : {
    alignContent:'center',
    textAlign:'center',
    fontSize: 36
  },
  ContainerContent:{
    paddingTop: 20
  },
  Label:{
    fontSize: 18,
  }
})

export default App