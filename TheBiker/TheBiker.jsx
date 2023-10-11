import {View, Text} from 'react-native';
import React from 'react';
import thebikerStyles from './thebikerStyles';

const TheBiker = () => {
  return (
    <View style={thebikerStyles.container}>
      <Text>TheBiker</Text>
      <View style={thebikerStyles.title}>
        <Text style={thebikerStyles.textTitle}>
          The Original Electric Motorbike
        </Text>
      </View>
      <Text style={thebikerStyles.description}>description</Text>
      <View style={thebikerStyles.orderNow}>
        <Text>ORDER NOW</Text>
      </View>
    </View>
  );
};

export default TheBiker;
