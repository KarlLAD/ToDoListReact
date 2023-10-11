import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Todo from './src/Todo'
import LeBonCoin from './LeBonCoin/LeBonCoin'


const App = () => {


  
// vérifié si on a bien travaillé
  // useEffect(() => {
    
  //   console.log("App start");

  //   firestore().collection('Todo').get().then(snapShot => {
  //       console.log('snapShot', snapShot);
  //   })
  

  // }, [])
  return (
    <View>
     
   
      <LeBonCoin/>

    </View>
  )
}

export default App