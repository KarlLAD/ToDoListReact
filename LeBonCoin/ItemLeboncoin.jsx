import { View, Text, ImageBackground ,TouchableOpacity } from 'react-native'
import React from 'react'
import leboncoinStyles from './leboncoinStyles'

import Icon from 'react-native-vector-icons/MaterialIcons';

const ItemLeboncoin = ({ product }) => {
    const goto = () => {
        console.log('product : ', product).id;
     }
    
  return (
      <TouchableOpacity style={leboncoinStyles.cardContainer}>
          <ImageBackground
              source={{ uri: product.thumbnail }}
              resizeMode='cover'
               style={leboncoinStyles.cardImage} 
              imageStyle={{ borderRadius: 20 }}
          >
              
              <View style={leboncoinStyles.favoriteIcon}>
                  
                  <Icon name="favorite" size={30} color="#fff" />;
                           </View>
              
                        </ImageBackground>
{/* text */}
          <View style={leboncoinStyles.containerTitlePrice}>
              <Text> {product.title} </Text>
              <Text> {product.price} € </Text>

          </View>
          <View style={leboncoinStyles.containerBrand}>
              <Text> {product.Brand} </Text>
              <Text> {product.price} € </Text>
              
          </View>


    
    </TouchableOpacity>
  )
}

export default ItemLeboncoin