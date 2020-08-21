import React from 'react'
import {View,Text,Image,StyleSheet } from 'react-native'

export default function App() {
  return(
    <View style={style.container}>
     
      <Text style={style.text}> LOVE CAT </Text>
      
      <Text style={style.text}> Career of React Navive </Text>

      <Image
        style={style.image}
        source={{uri:'https://f.ptcdn.info/109/063/000/pot8sz5y13kht9xAW2U-o.png'}}
        
      />

      <Image
      style={style.image}
      source={require('./assets/Capture.png')}
      />
    </View>
  )
}
  const style=StyleSheet.create({
    container:{
      alignItems:'center',
      alignContent:'center',
      flex:1,
    },
    text:{
      fontSize:10,
      fontWeight:'bold',
      color:'#CBAB8D',
      backgroundColor:'#FDB4BF',
      padding:20,
      margin:20,
    },
    image:{
      width:375,
      height:567,
    }
  })