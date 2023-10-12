const {StyleSheet} = require('react-native');

export default StyleSheet.create({
  container: {
    flex: 1,
    // display: 'flex',
    // backgroundColor: 'blue',
  },

  imageMenu: {
    height: 50,
    width: 50,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerSite: {
    marginTop: 70,
    height: 50,
    width: 200,
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  NameSite: {
    color: 'black',
    fontWeight: '700',
    fontSize: 36,
  },

  Search: {
    // margin: 10,
    marginTop: 20,
    height: 50,
    // width: 340,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 35,
  },
  SearchIcon: {
    // margin: 20,
    height: 30,
    width: 30,
  },
  SearchText: {
    fontSize: 24,
    fontWeight: '700',
    height: 50,
    width: '90%',
    borderColor: 'green',
    borderRadius: 30,
    borderWidth: 1,
    // marginBottom: 10,
  },
  category: {
    height: 50,
    width: '80% ',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    padding: 10,
  },
  categoryAll: {
    fontSize: 16,
    fontWeight: '700',
  },
  categoryText: {
    fontSize: 16,
    color: '#D3D3D3',
    fontWeight: '700',
  },
  ContainerProduct: {
    marginTop: 70,
    height: 50,
    width: 300,
    backgroundColor: 'red',
  },
  productTitle: {
    height: 50,
    width: 100,
    marginTop: 10,
  },
});
