import { View, Text , FlatList} from 'react-native'
import React from 'react'
import leboncoinStyles from './leboncoinStyles'
import ItemLeboncoin from './ItemLeboncoin'
import { products } from './data'

const LeBonCoin = () => {
  return (
    <View style={leboncoinStyles.container}>
          <Text>LeBonCoin</Text>
                <FlatList 
              data={products}
              renderItem={({ item }) => <ItemLeboncoin product={item} /> }
              keyExtractor={item => item.id}
          />
    </View>
  )
}

export default LeBonCoin