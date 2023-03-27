import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {PermissionsAndroid} from 'react-native';
import Header from '../../components/header';
import ContactInput from '../../components/contactsearchinput';
import styles from './styles';
import Phno from '../../assets/svg/common/phno.svg';
import Search from '../../assets/svg/common/search.svg';
import Filter from '../../assets/svg/common/filter.svg';

class searchInput extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   searchText: '',
    // };
  }

  render() {
    const {onPressFilter, value, onChange, onPressSearch, onFocus, onBlur} =
      this.props;
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={styles.mainContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '87%'}}>
              <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.txtInput}
                placeholder="search for a plan"
                placeholderTextColor={'#A9A9A9'}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </View>
            <View>
              <TouchableOpacity onPress={onPressSearch} style={styles.search}>
                <Search />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={onPressFilter} style={styles.filter}>
          <Filter />
        </TouchableOpacity>
      </View>
    );
  }
}

export default searchInput;
