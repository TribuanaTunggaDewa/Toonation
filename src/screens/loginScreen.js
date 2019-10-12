    import React, {Component} from 'react'
    import {View, StyleSheet, TouchableOpacity }  from 'react-native'
    import {Container, Title, Content, Text, Header, Form, Card, CardItem, Item, Label, Input, Button} from 'native-base'
    import Icon from 'react-native-vector-icons/FontAwesome'


    class loginScreen extends Component {

      constructor(props){
        super(props)
          this.state = {
            showHide : 'eye-slash',
            statusHide : true,
            noteEmail : '',
            notePassword : '',
            button_status : true
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
        if(/^(?=.{8,})/.test(password)){
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
            <Container>
                <Header>
                  <Title>Toonation</Title>
                </Header>
                <Content>
                  <Text>LOG IN</Text>
                  <Text>Login with your account Toonation</Text>
                  <Form>
                    <Card>              
                      <CardItem>
                        <Item>
                          <Input placeholder='Email' onChangeText={(input_email)=>{this.setState({input_email}), this.validateEmail(input_email), this.enableButton()}} value={this.state.input_email} />
                        </Item>
                      </CardItem>
                        <Text>{this.state.noteEmail}</Text>
                      <CardItem>
                        <Item>
                          <Input placeholder='Password' secureTextEntry={this.state.statusHide} onChangeText={(input_password)=> { this.setState({input_password}), this.validatePassword(input_password), this.enableButton() }} value={this.state.input_password} />
                            <Icon name={this.state.showHide} size={30} onPress={()=> {if (this.state.showHide == 'eye-slash'){this.setState({showHide : 'eye', statusHide: false}) }else this.setState({showHide : 'eye-slash', statusHide: true})}}  />
                        </Item>
                      </CardItem>
                      <Text>{this.state.notePassword}</Text>
                      <TouchableOpacity disabled={this.state.button_status} onPress={()=> this.props.navigation.navigate('For You')} ><Text >Log IN</Text></TouchableOpacity>
                    </Card>
                  </Form>
                </Content>
              </Container>
        )
      }

    }



    export default loginScreen