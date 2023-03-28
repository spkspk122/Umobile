import {Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

//styles
import {baseStyle} from '../../constant/themes';

const styles = StyleSheet.create({
  showBefore: {
    backgroundColor: '#f8f9fe',
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    marginTop: '5%',
    padding: '3%',
  },
  showAfter: {
    backgroundColor: '#f8f9fe',
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,

    padding: '3%',
  },
  container: {
    padding: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lable: {
    color: 'black',
    fontSize: heightPercentageToDP('1.8%'),
    fontWeight: '500',
    width: '70%',
    marginTop: '2%',
  },
  borderBottom: {borderColor: 'gray', borderBottomWidth: 0.5},
  bodyShowBefore: {
    backgroundColor: 'white',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    marginBottom: '5%',
  },
  bodyShowAfter: {
    backgroundColor: 'white',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
  },
  mapView: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  container1: {flexDirection: 'row', width: '70%'},
  img: {
    resizeMode: 'contain',
    tintColor: 'blue',
  },
  img1: {
    marginTop: '2%',

    width: '25%',
    height: '100%',
    marginLeft: '3%',
    backgroundColor: 'white',
  },
  txt: {
    color: 'black',
    fontSize: heightPercentageToDP('1.55%'),
    fontWeight: '700',
    // width: '70%',
    marginLeft: '3%',
    width: '65%',
    marginTop: '5%',
  },
  descData: {
    color: 'black',
    fontSize: heightPercentageToDP('1.4%'),
    fontWeight: '500',
    // width: '70%',
    marginLeft: '3%',
    marginTop: '1%',
  },
  linkAndPay: {
    color: 'blue',
    fontSize: heightPercentageToDP('1.8%'),
    fontWeight: '500',
  },
  cupon: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'red',
    marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  offerView: {
    flexDirection: 'row',
    width: '60%',
    marginTop: '2%',
  },
  offerTxt: {
    color: 'black',
    fontSize: heightPercentageToDP('1.4%'),
    fontWeight: '500',
  },
  applyTch: {width: '20%', marginTop: '2%'},
  applyTxt: {
    color: 'blue',
    fontSize: heightPercentageToDP('1.4%'),
    fontWeight: '500',
  },
  bottomBorder1: {
    borderColor: 'gray',
    borderBottomWidth: 0.9,
    marginTop: '2%',
  },

  showBbodyBefore: {
    backgroundColor: 'white',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    marginBottom: '5%',
  },
  showBodyAfter: {
    backgroundColor: 'white',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
  },
  contain1: {
    backgroundColor: 'white',
    width: '90%',

    // height: '7%',
    marginTop: '5%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    alignSelf: 'center',
  },
  cardTxt: {
    marginTop: '3%',
    padding: Platform.OS == 'ios' ? 8 : 5,
    marginBottom: '2%',
    color: 'black',
  },
  cancleBtn: {
    marginLeft: heightPercentageToDP('0.5%'),
    marginTop:
      Platform.OS == 'ios'
        ? heightPercentageToDP('1%')
        : heightPercentageToDP('2%'),
  },
  subContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '5%',
  },
  mainContainer: {
    backgroundColor: 'white',
    width: '50%',

    marginTop: '5%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,

    marginLeft: '5%',
  },
  txtInput: {
    marginTop: '3%',
    padding: Platform.OS == 'ios' ? 8 : 5,
    marginBottom: '2%',
    color: 'black',
  },
  cvvView: {
    backgroundColor: 'white',
    width: '40%',

    // height: '7%',
    marginTop: '5%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    alignSelf: 'center',
  },
  cvvInput: {
    marginTop: '3%',
    padding: Platform.OS == 'ios' ? 8 : 5,
    marginBottom: '2%',
    color: 'black',
  },
  eye: {
    marginLeft: heightPercentageToDP('0.5%'),
    marginTop:
      Platform.OS == 'ios'
        ? heightPercentageToDP('0.5%')
        : heightPercentageToDP('1.5%'),
  },
  bottomBorder: {
    borderColor: 'gray',
    borderBottomWidth: 0.5,
  },
});

export default styles;
