import {Platform, StyleSheet} from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B3B3B',
    paddingTop: 5,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: '#C0C0C0',
    borderRadius: 15,
    marginTop: '10%',
    width: '90%',
    alignSelf: 'center',
  },

  input: {
    fontSize: 16,
    height: Platform.OS=="ios"?29:29,
    color: '#fff',
    marginBottom: '1%',
    paddingBottom:Platform.OS=="ios"?10:2,
  },
  label: {
    color: '#C0C0C0',
    fontSize: 13,
    marginBottom: '2%',
  },
});

export default styles;
