import {View, Text} from 'react-native';
import React from 'react';
import discoveryStyles from './discoveryStyles';

const Product = ({product}) => {
  console.log('item', item);
  console.log('product :', product);
  return (
    <>
      <View style={discoveryStyles.ContainerProduct}>
        <Text style={discoveryStyles.productTitle}>Product avec FlatList</Text>
        <Text style={discoveryStyles.productTitle}>{product.title}</Text>
      </View>
    </>
  );
};

export default Product;
