import {View, Text, Image, TextInput, FlatList} from 'react-native';
import React from 'react';
import Category from './Category';
import Product from './Product';
import Popular from './Popular';
// import {category} from './data';
import {productData} from './data';

import IconMenu from 'react-native-vector-icons/MaterialIcons';
import icon from 'react-native-vector-icons';

import discoveryStyles from './discoveryStyles';

const Discovery = () => {
  return (
    <View style={discoveryStyles.container}>
      {/* navbar */}
      <View style={discoveryStyles.navbar}>
        <Image
          style={discoveryStyles.imageMenu}
          source={require('./Assets/noun-menu.png')}
        />
        <Image
          style={discoveryStyles.imageMenu}
          source={require('./Assets/2002332-ablack-man-avatar-character-isolated-icon-gratuit-vectoriel.jpg')}
        />
      </View>
      {/* Nom du site */}
      <View style={discoveryStyles.containerSite}>
        <Text style={discoveryStyles.NameSite}>Discover</Text>
      </View>
      {/* barre de recherche */}
      <View style={discoveryStyles.Search}>
        <Image
          style={discoveryStyles.SearchIcon}
          source={require('./Assets/search.jpg')}
        />
        <TextInput style={discoveryStyles.SearchText} placeholder="   Search" />
      </View>
      {/* Categories */}
      {/* <FlatList
        data={category}
        renderItem={({item}) => <Category category={item} />}
        keyExtractor={item => item.id}
      /> */}

      <Category />
      {/* <Product /> */}

      <FlatList
        data={productData}
        renderItem={({item}) => <Product product={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text style={discoveryStyles.ContainerProduct}>Fin FlatList</Text>

      <Popular />
    </View>
  );
};

export default Discovery;
