import {View, Text} from 'react-native';
import React from 'react';
import discoveryStyles from './discoveryStyles';

const Category = () => {
  return (
    <View style={discoveryStyles.category}>
      <Text style={discoveryStyles.categoryAll}>All</Text>
      <Text style={discoveryStyles.categoryText}>Indoor</Text>
      <Text style={discoveryStyles.categoryText}>Outdoor</Text>
      <Text style={discoveryStyles.categoryText}>Flowers</Text>
    </View>
  );
};

export default Category;
