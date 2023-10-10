import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import  firestore  from '@react-native-firebase/firestore';
import ItemTodo from './ItemTodo';

const ListerTodo = () => {
/*****************************************
 *  init all state : todos, loading
 * 
******************************************/

// init des datas
    const [todos, setTodos ] = useState([]);
//init du waitings
    const [loading, setLoading ] = useState(true);

    

    useEffect(() => {
        
        console.log('lister');

        //querySnapshot : abonne à toute les modification de firestore().collection('Todo')
        firestore().collection('Todo').onSnapshot(querySnapshot => {
            
            // console.log('querySnapshot', querySnapshot);
            const dataTodos = [];


            // boucle et on lit le document
            querySnapshot.forEach(doc => {

                // console.log(doc.data());

                dataTodos.push({
                    id:doc.id,
                ...doc.data()
                })

   

            })

            setTodos(dataTodos)
            
            // if simple
            loading && setLoading(false);

        })

    }, []);


  return (
    <View>
          <Text>Lister Todo :</Text>
                  {
        loading ? <ActivityIndicator animating={true} />
          : <FlatList
            data={todos}
            renderItem={({ item }) => <ItemTodo todo={item} />}
            keyExtractor={item => item.id}
          />
      } 
    </View>
  )
}

export default ListerTodo