import React from 'react'
import {View,Text,Image,StyleSheet,Button } from 'react-native'

export default class App extends React.Component {
  state={
    headline:'Where to my App',
  }
  updateState=()=>{
    this.setstate({
      headline:'Welcome to my App',
    
    })
  }
  render(){
  return(
    <View style={style.container}>
     
      <Image
        style={style.image}
        source={{uri:'https://f.ptcdn.info/109/063/000/pot8sz5y13kht9xAW2U-o.png'}}

      />
       <Text style={style.text}> Career of React Navive </Text>
       <Button
        onPress={"onPressLeanning"}
        title="produce x 101"
        color="#D0B3E1"
      
       />
    </View>
  )
}
}
  const style=StyleSheet.create({
    container:{
      alignItems:'center',
      alignContent:'center',
      flex:1,
      backgroundColor:'#A4C8F0',
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