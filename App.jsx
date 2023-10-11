import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Todo from './src/Todo';
import LeBonCoin from './LeBonCoin/LeBonCoin';
import TheBurger from './TheBurger/TheBurger';

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
      {/* <LeBonCoin/> */}
      <TheBurger />
    </View>
  );
};

export default App;
