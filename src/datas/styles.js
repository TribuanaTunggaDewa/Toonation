import {StyleSheet} from 'react-native'

const color = '#009688'
const buttonColor = '#03A9F4'

export default StyleSheet.create({
    
    input: {
        width: 100
    },
    container:{
        padding: 10,
        alignItems: 'center'
    },
    content:{
        marginTop: 10,
        padding: 10,
        backgroundColor : '#BDBDBD'
    },
    loginTitle:{
        fontSize: 28,
        fontStyle: 'normal',
        textAlign:'center',
        marginTop: 40
    
    },
    loginSubtitle:{
        textAlign:'center'
    },
    loginCard:{
        marginTop: 30,
        backgroundColor:'white',
        width: 270,
        alignSelf:'center'
    },
    oneButton:{
        backgroundColor: buttonColor,
        width: 270,
        height:50,
        alignSelf: 'center'
    },
    TextButton:{
        fontSize:18,
        textAlign:'center',
        justifyContent:'center',
        paddingTop: 10,
        color:'white'

},header:{
    backgroundColor: color
},secondHeader:{
    backgroundColor: '#00796B'
},


buttoncolor :{
    backgroundColor: buttonColor
},imageBanner:{
        width :400,
        height:170
    },
    imagelist:{
        width: 100,
        height: 150,
        marginStart: 10,
        padding: 10
        
    },   splitButton:{
        backgroundColor: buttonColor,
        marginStart: 11,
    },
    textList:{
        marginStart: 30
    },
    circleBorder : {
        height:200,
        width:200, 
        borderRadius: 200/ 2,
        borderWidth:4,
        borderColor: 'black',
        alignSelf:'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    TouchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 10,
    },
    FloatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      //backgroundColor:'black'
    }
   

})