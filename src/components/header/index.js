import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  FlatList,
  Button,
  Linking,
} from 'react-native';
import React, {Component} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Contacts from 'react-native-contacts';
import {PermissionsAndroid} from 'react-native';
import {Icon} from 'react-native-vector-icons/Icon';
import LeftIcon from '../../assets/svg/common/leftarrow.svg';
import Question from '../../assets/svg/common/question.svg';
import styles from './styles';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <View style={{}}>
        <View style={styles.main}>
          <TouchableOpacity onPress={this.props.onPress1}>
            <View style={styles.icon}>
              <LeftIcon />
            </View>
          </TouchableOpacity>
          <Text style={styles.heading}>recharge</Text>
          <TouchableOpacity>
            <Question />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;
