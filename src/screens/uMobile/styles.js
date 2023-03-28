import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container1: {
    marginTop: '5%',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    width: '100%',
    borderColor: 'gray',
    borderBottomWidth: 2,
    padding: 2,
    marginBottom: 10,
  },
  activeTab: {
    borderColor: 'black',
    borderBottomWidth: 3,
    marginLeft: '5%',
  },
  tabText: {
    color: '#333',
    fontSize: 16,
  },
  activeTabText: {
    color: '#000',
  },
  content: {},
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
});

export default styles;
