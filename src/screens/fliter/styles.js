import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  thouch: {
    flex: 1,
    borderRadius: heightPercentageToDP('5%'),

    marginHorizontal: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    backgroundColor: 'black',
  },

  touchAfter: {
    flex: 1,
    borderRadius: heightPercentageToDP('5%'),

    marginHorizontal: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  textBefore: {
    textAlign: 'center',
    color: 'white',
  },
  txtAfter: {
    textAlign: 'center',
    color: 'black',
  },
  subContainer: {
    backgroundColor: '#D9BBFC',
    padding: '1%',
    width: '15%',
    alignSelf: 'center',
    marginTop: '4%',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  mainCntainer: {
    backgroundColor: '#FAF6FE',
    flex: 1,
    marginTop: '5%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  flatView: {
    marginTop: '5%',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});

export default styles;
