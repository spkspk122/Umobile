import {StyleSheet} from 'react-native';
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
  icon: {
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
  subContainer: {
    borderColor: 'gray',
    borderBottomWidth: 0.5,
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
    padding: 8,
    marginBottom: '2%',
  },
  cancleBtn: {
    marginLeft: heightPercentageToDP('0.5%'),
    marginTop: heightPercentageToDP('1%'),
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
    padding: 8,
    marginBottom: '2%',
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
    padding: 8,
    marginBottom: '2%',
  },
  eye: {
    marginLeft: heightPercentageToDP('0.5%'),
    marginTop: heightPercentageToDP('0.5%'),
  },
  bottomBorder: {
    borderColor: 'gray',
    borderBottomWidth: 0.5,
  },
});

export default styles;
