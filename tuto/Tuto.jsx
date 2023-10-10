import { View, Text , ImageBackground } from 'react-native'
import React from 'react'
import tutoStyles from './tutoStyles'


const Tuto = () => {
    const image = {uri: "https://legacy.reactjs.org/logo-og.png"};
  return (
    <View style={tutoStyles.container} >
          <Text>Tuto</Text>
          <ImageBackground source={image} resizeMode="cover" style={tutoStyles.image}>
              
             <View style={tutoStyles.subContainer}>
              
          <View style={tutoStyles.box1} />
          <View style={tutoStyles.box2} />
          <View style={tutoStyles.box3} />
         
              </View>
              
          </ImageBackground>
         
   
              
              
              

          
    </View>
  )
}

export default Tuto