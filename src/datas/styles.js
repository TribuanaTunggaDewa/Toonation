import {StyleSheet} from 'react-native'

const color = '#009688'
const buttonColor = '#03A9F4'

export default StyleSheet.create({
    
    container:{
        padding: 10,
        alignItems: 'center'
    },
    content:{
        marginTop: 10,
        padding: 10   
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
        marginTop: 30
    },
    oneButton:{
        backgroundColor: color,
        width: 270,
        height:50,
        alignSelf:'center',
    },
    TextButton:{
        fontSize:18,
        textAlign:'center',
        justifyContent:'center',
        paddingTop: 10,
        color: 'white'
},cardItem:{
    backgroundColor:'white'
},text:{
    color:'white'
},imageBanner : {
    width: 300,
    height: 250
},header:{
    backgroundColor: color
},buttoncolor :{
    backgroundColor: buttonColor
},imageBanner:{
        width :400,
        height:170
    },
    imagelist:{
        width: 100,
        height: 150,
        marginStart: 30
    }
   

})