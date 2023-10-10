import { View, Text ,  Button  } from 'react-native'
import React from 'react'

import firestore from '@react-native-firebase/firestore';

const ItemTodo = ({ todo }) => {
  
   
  console.log("todo :", todo);
  const snapShot = firestore().collection("Todo").get();

  console.log("snapShot de Todo : ", snapShot);

    const supprimer = () => {
        firestore().collection("Todo").doc(todo.id).delete();

    }


    const realiser = () => { 
      firestore().collection("Todo").doc(todo.id).update(
          {
            status : !todo.status ,  
        }
         
        );

     }


  return (


    // <View style={height : 50, width: 350, backgroundColor: "#fff", margin: 10, flexDirection : "row" }> 
    // view style background    *4 fois


    // </View>

    <View> 
           {todo.status  ? <Text style={ {textDecorationLine:'line-through'}}> {todo?.task}</Text> 
              : <Text>   {todo?.task} </Text>
          } 
          <Button title='Del' onPress={supprimer}/>
          <Button title={todo.status ? 'Upd' : 'No done'} onPress={realiser}/>

      
    </View>

  )
}

export default ItemTodo