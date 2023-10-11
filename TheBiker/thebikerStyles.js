import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },

  orderNow: {
    height: 50,
    width: 250,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginHorizontal: 50,
    marginVertical: 50,
  },

  title: {
    height: 80,
    width: 180,
    margin: 20,
    padding: 20,
    backgroundColor: 'green',
    marginTop: 350,
  },

  textTitle: {
    color: 'white',
    fontWeight: '800',
    fontSize: 16,
  },

  description: {
    color: 'black',
    margin: 10,
    height: 40,
    width: 100,
  },
});
