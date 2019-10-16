    import React, {Component} from 'react'
    import {View, StyleSheet, TouchableOpacity }  from 'react-native'
    import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
    import Icon from 'react-native-vector-icons/FontAwesome'
    import styles from '../datas/styles'
    import axios from 'axios'
    import AsyncStorage from '@react-native-community/async-storage'


    class loginScreen extends Component {

      constructor(props){
        super(props)
          this.state = {
            showHide : 'eye-slash',
            statusHide : true,
            noteEmail : '',
            notePassword : '',
            input_email: '',
            input_password:'',
            button_status : true
          }
      }

      login = async () => {
        try{
          let temp = {
            email : this.state.input_email,
            password: this.state.input_password
          }
          await axios.post('http://192.168.1.13:5000/api/v1/login', temp)
          .then((response)=>{
            if(typeof response.data.token !== 'undefined'){
              AsyncStorage.setItem('uToken', response.data.token)
              this.props.navigation.navigate('For You')
              console.log(response.data.token)
            }else{
              alert('Gagal Login')
            }
          })
          .catch((error)=>{
            alert(error)
          })
        }
        catch(e){
          console.log(e)
        }
      }


      validateEmail = (email) => {
        
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))
        {
          this.setState({ noteEmail: 'Your email is valid' })
        }
        else  {
          this.setState({ noteEmail: 'This is not an email' })
        }
      }

      validatePassword = (password)=>{
        if(/^(?=.{1,})/.test(password)){
            this.setState({ notePassword: 'Password correct'})
        }
        else {
            this.setState({ notePassword: 'Password must be nine characters or longer'})
        }
      }

      enableButton = ()=>{
        if (this.state.noteEmail === 'Your email is valid' && this.state.notePassword === "Password correct") 
          this.setState({button_status : false})
          else 
            this.setState({button_status : true})
      }

      render(){
        return(
            <Container style={styles.container}>
                <Content style={styles.content}>
                  <Text style={styles.loginTitle}>LOG IN</Text>
                  <Text style={styles.loginSubtitle} >Login with your account Toonation</Text>
                  <Form> 
                    <Card style={styles.loginCard}>              
                      <CardItem style={styles.cardItem}>
                        <Item  >
                          <Input placeholder='Email' onChangeText={(input_email)=>{this.setState({input_email}), this.validateEmail(input_email), this.enableButton()}} value={this.state.input_email} />
                        </Item>
                      </CardItem>
                      <CardItem style={styles.cardItem}>
                        <Item> 
                          <Input placeholder='Password' secureTextEntry={this.state.statusHide} onChangeText={(input_password)=> { this.setState({input_password}), this.validatePassword(input_password), this.enableButton() }} value={this.state.input_password} />
                            <Icon name={this.state.showHide} size={30} onPress={()=> {if (this.state.showHide == 'eye-slash'){this.setState({showHide : 'eye', statusHide: false}) }else this.setState({showHide : 'eye-slash', statusHide: true})}}  />
                        </Item>
                      </CardItem>
                      <CardItem style={styles.cardItem}>
                      <Item>
                      <TouchableOpacity style={styles.oneButton} disabled={this.state.button_status} onPress={()=> this.login()} ><Text style={styles.TextButton} >LOG IN</Text></TouchableOpacity>
                      </Item>
                      </CardItem>
                      </Card>
                  </Form>
                </Content>
              </Container>
        )
      }

    }



    export default loginScreen