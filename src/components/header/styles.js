import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  main: {
    width: '90%',
    alignSelf: 'center',
    marginTop: Platform.OS == 'android' ? '5%' : '9%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    backgroundColor: 'gray',
    borderRadius: 50,
    padding: '5%',
    alignSelf: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: heightPercentageToDP('2.8%'),
    fontWeight: '900',
  },
});

export default styles;
