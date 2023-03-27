import {Platform, StyleSheet} from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    width: '80%',
    marginLeft: '3%',
    // height: '7%',
    marginTop: '5%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  txtInput: {
    marginTop: '3%',
    padding: Platform.OS=='ios'?8:2,
    marginBottom: '2%',
    color:'#000'
  },
  search: {
    marginLeft: heightPercentageToDP('0.5%'),
    marginTop: heightPercentageToDP('1%'),
  },
  filter: {
    marginTop: heightPercentageToDP('2.8%'),
    marginLeft: '3%',
    borderRadius: 15,
    borderColor: '#A9A9A9',
    borderWidth: 1,
    backgroundColor: 'white',
  },
});

export default styles;
