import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import ItemTheBurger from './ItemTheBurger';
import theburgerStyles from './theburgerStyles';

// const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const TheBurger = () => {
  return (
    <View style={theburgerStyles.container}>
      <View style={theburgerStyles.containerStart}>
        <Text style={theburgerStyles.textFooter}>GET STARTED</Text>
      </View>
    </View>
  );
};

export default TheBurger;
