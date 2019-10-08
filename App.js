import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity }  from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class App extends Component {

  constructor(props){
    super(props)
      this.state = {
        showHide : 'eye-slash',
        statusHide : false,
        inputEmail : '',
        noteEmail : ''
      }
  }

  validateEmail = (email) => {
    
    if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))
    {
      this.setState({ noteEmail: 'email yang anda masukkan sesuai format' })
    }
    else  {
      this.setState({ noteEmail: 'Yang anda masukkan bukan email' })
    }
  }

  render(){
    return(
      <View style={style.Container}>
        <View style={style.ContainerTitle}>
          <Text style={style.Title}>LOG IN</Text>
          <Text style={{textAlign:'center', letterSpacing:2}}>Login with your account Toonation</Text>
        </View>
        <View style={style.ContainerContent}>
          <Text style={style.Label,{marginTop:20}}>Email</Text>
          <TextInput style={{ borderColor: 'black', borderWidth:2, height: 40}} onChangeText={(input_email)=>{this.setState({input_email}), this.validateEmail(input_email)}} value={this.state.input_email} />
          <Text>{this.state.noteEmail}</Text>
          <Text style={style.Label,{marginTop:10}}>Password</Text>
          <View style={{flex:1,flexDirection:'row'}}>
            <TextInput style={{ borderColor: 'black', borderWidth:2, height: 40, width:289}} secureTextEntry={this.state.statusHide} />
            <TouchableOpacity style={{backgroundColor:'grey', height : 40, width : 30 }} onPress={()=> {if (this.state.showHide == 'eye-slash'){this.setState({showHide : 'eye', statusHide: false}) }else this.setState({showHide : 'eye-slash', statusHide: true}) }} >
              <Icon name={this.state.showHide} size={30}  />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{backgroundColor:'grey', borderWidth: 2, height: 35, marginTop: 70}}><Text style={{textAlign:"center", color:'white', fontSize: 18}}>Log IN</Text></TouchableOpacity>
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