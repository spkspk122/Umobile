import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

//styles
import {baseStyle} from '../../constant/themes';

const styles = StyleSheet.create({
  touchBtn: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: '5%',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginVertical: '8%',
  },
  price: {
    alignSelf: 'center',
    marginBottom: '5%',
    fontWeight: '500',
    fontSize: 14,
    color:'#000'
  },
  ultimateTxt: {alignSelf: 'center', color: 'gray'},
  bandWith: {
    alignSelf: 'center',
    marginBottom: '5%',
    fontWeight: '500',
    fontSize: 14,
    color:'#000'
  },
  speedTxt: {alignSelf: 'center', color: 'gray'},
  monthTxt: {
    alignSelf: 'center',
    marginBottom: '5%',
    fontWeight: '500',
    fontSize: 14,
    color:'#000'
  },
  validityTxt: {alignSelf: 'center', color: 'gray'},
  ri8Arrow: {marginHorizontal: '2%', marginRight: '6%'},
  cont1: {
    borderColor: '#c6c6c6',
    borderWidth: 0.5,
    marginBottom: '5%',
  },
  subContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '5%',
  },

  linearView: {
    backgroundColor: 'blue',
    padding: '2.5%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: 'row',
    width: '30%',
  },
  linearMonth: {
    color: 'white',
    fontSize: 10,
    fontWeight: '900',
    alignSelf: 'center',
    marginLeft: '3%',
  },
  touchBtn1: {
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginBottom: '5%',
    borderColor: '#5f00d3',
    borderWidth: 0.5,
  },
  subContain1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginLeft: '3%',
    marginVertical: '8%',
  },
  originalPrice: {
    alignSelf: 'center',
    marginBottom: '5%',
    fontWeight: '500',
    fontSize: 10,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  subContain2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '5%',
  },
  saveLinera: {
    backgroundColor: 'blue',
    padding: '3%',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    flexDirection: 'row',
  },
  saveTxt1: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    alignSelf: 'center',
    marginLeft: '3%',
  },
  conatiner2: {
    backgroundColor: 'gray',
    padding: '2.5%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: 'row',
    width: '30%',
  },
  lastRecharge: {
    color: 'white',
    fontSize: 10,
    fontWeight: '900',
    alignSelf: 'center',
    marginLeft: '3%',
  },
  container3: {
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginBottom: '5%',
  },
  borderWidthView: {
    borderColor: '#c6c6c6',
    borderWidth: 0.5,
    marginBottom: '5%',
  },
});

export default styles;
