import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {Component} from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import RightArrow from '../../assets/svg/common/rightArrow.svg';
import Offer from '../../assets/svg/common/offer.svg';
import Wallet from '../../assets/svg/common/wallet.svg';
import DownArrow from '../../assets/svg/common/downArror.svg';
import UpArrow from '../../assets/svg/common/upArrow.svg';
import Cancle from '../../assets/svg/common/cancle.svg';
import Eye from '../../assets/svg/common/eye.svg';
import styles from './styles';

class Cardccordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      check: null,
    };
  }

  toggleExpand = () => {
    this.setState({show: !this.state.show});
  };

  render() {
    const {onPressFilter, value, onChange, onPressSearch} = this.props;
    return (
      <>
        <View style={{}}>
          <View style={this.state.show ? styles.showBefore : styles.showAfter}>
            <View style={styles.icon}>
              {this.props.icon}
              <Text style={styles.lable}>{this.props.lable}</Text>
              <TouchableOpacity
                style={{marginTop: '2%'}}
                onPress={() => this.toggleExpand()}>
                {this.state.show === true ? <UpArrow /> : <DownArrow />}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.subContainer} />
          {this.state.show && (
            <View
              style={
                this.state.show ? styles.showBbodyBefore : styles.showBodyAfter
              }>
              <View style={styles.contain1}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: '87%'}}>
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      style={styles.cardTxt}
                      placeholder="Card number"
                      placeholderTextColor={'#A9A9A9'}
                    />
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={onPressSearch}
                      style={styles.cancleBtn}>
                      <Cancle />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.subContainer1}>
                <View style={styles.mainContainer}>
                  <View>
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      style={styles.txtInput}
                      placeholder="Valid thru (mm/yy)"
                      placeholderTextColor={'#A9A9A9'}
                    />
                  </View>
                </View>
                <View style={styles.cvvView}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{width: '70%'}}>
                      <TextInput
                        value={value}
                        onChangeText={onChange}
                        style={styles.cvvInput}
                        placeholder="Cvv"
                        placeholderTextColor={'#A9A9A9'}
                      />
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={onPressSearch}
                        style={styles.eye}>
                        <Eye />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.bottomBorder} />
              </View>
            </View>
          )}
        </View>
      </>
    );
  }
}

export default Cardccordian;
