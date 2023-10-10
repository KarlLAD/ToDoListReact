import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Todo from './src/Todo'
import Tuto from './tuto/Tuto'
// import firestore from '@react-native-firebase/firestore'

const App = () => {


  
// vérifié si on a bien travaillé
  // useEffect(() => {
    
  //   console.log("App start");

  //   firestore().collection('Todo').get().then(snapShot => {
  //       console.log('snapShot', snapShot);
  //   })
  

  // }, [])
  return (

      <Tuto/>

    
      
  )
}

export default App