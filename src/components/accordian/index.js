import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import RightArrow from '../../assets/svg/common/rightArrow.svg';
import Offer from '../../assets/svg/common/offer.svg';
import Wallet from '../../assets/svg/common/wallet.svg';
import DownArrow from '../../assets/svg/common/downArror.svg';
import UpArrow from '../../assets/svg/common/upArrow.svg';
import styles from './styles';

class Accordian extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onPressFilter,
      amount,
      id,
      label,
      icon,
      activeAccordian,
      onPress,
      children,
    } = this.props;
    return (
      <>
     
        <View
          style={id === activeAccordian ? styles.showBefore : styles.showAfter}>
          <View style={styles.container}>
            {icon}
            <Text style={styles.lable}>{label}</Text>
            <TouchableOpacity
              style={{marginTop: '2%'}}
              onPress={() => onPress(id)}>
              {id === activeAccordian ? <UpArrow /> : <DownArrow />}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.borderBottom} />

        {id === activeAccordian && children}
      </>
    );
  }
}

export default Accordian;
