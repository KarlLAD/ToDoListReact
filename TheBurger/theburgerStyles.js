import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
  },

  containerStart: {
    width: 200,
    height: 50,
    backgroundColor: 'orange-yellow',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: (width - 20) / 4,
    marginVertical: 500,
  },

  textFooter: {
    fontWeight: '700',
    fontSize: 18,
  },
});
