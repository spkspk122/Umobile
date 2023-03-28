import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import RightArrow from '../../assets/svg/common/rightArrow.svg';
import Gift from '../../assets/svg/common/gift.svg';
import LinearGradient from 'react-native-linear-gradient';
import navigationService from '../../routes/navigationService';
import {SCREENS} from '../../constants';

class Card extends Component {
  renderData = ({item}) => {
    const {onPress1} = this.props;
    return (
      <>
        {item?.plan_type === 'normal' ? (
          <TouchableOpacity
            onPress={() => onPress1(item)}
            style={styles.touchBtn}>
            <View style={styles.container1}>
              <View style={{width: '30%'}}>
                <Text style={styles.price}>{item?.price}</Text>
                <Text style={styles.ultimateTxt}>ultimate</Text>
              </View>

              <View style={{width: '30%'}}>
                <Text style={styles.bandWith}>{`${item?.bandwidth} Mbps`}</Text>
                <Text style={styles.speedTxt}>speed</Text>
              </View>
              <View style={{width: '30%'}}>
                <Text style={styles.monthTxt}>{`${item?.validity} month`}</Text>
                <Text style={styles.validityTxt}>Validity</Text>
              </View>
              <View style={styles.ri8Arrow}>
                <RightArrow />
              </View>
            </View>
            <View style={styles.cont1} />
            <View style={styles.subContain}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'gray'}}>ultimate</Text>
                <Text style={{color: 'gray', marginLeft: '5%', fontSize: 13}}>
                  Xstream Premimum
                </Text>
              </View>
              <View>
                <Text style={{color: 'gray', fontSize: 11, fontWeight: '700'}}>
                  view details
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : item.plan_type == 'save' ? (
          <>
            <LinearGradient
              colors={['#c900d3', '#5f00d3']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0}}
              style={styles.linearView}>
              <Text style={styles.linearMonth}>
                {`Only Rs. ${Math.round(item?.price / item?.validity)}/month`}
              </Text>
            </LinearGradient>
            <TouchableOpacity
              onPress={() => onPress1(item)}
              style={styles.touchBtn1}>
              <View style={styles.subContain1}>
                <View style={{width: '30%'}}>
                  <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <Text style={styles.price}>{item?.price}</Text>

                    <Text style={styles.originalPrice}>
                      {'  '}
                      {item?.original_price}
                    </Text>
                  </View>

                  <Text style={styles.ultimateTxt}>ultimate</Text>
                </View>

                <View style={{width: '30%'}}>
                  <Text style={styles.price}>{`${item?.bandwidth} Mbps`}</Text>
                  <Text style={styles.ultimateTxt}>speed</Text>
                </View>
                <View style={{width: '30%'}}>
                  <Text style={styles.bandWith}>
                    {`${item?.validity} month`}
                  </Text>
                  <Text style={styles.ultimateTxt}>Validity</Text>
                </View>
                <View style={styles.ri8Arrow}>
                  <RightArrow />
                </View>
              </View>
              <View style={styles.cont1} />
              <View style={styles.subContain2}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'gray'}}>ultimate</Text>
                  <Text style={{color: 'gray', marginLeft: '5%', fontSize: 13}}>
                    Xstream Premimum
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: 'gray', fontSize: 11, fontWeight: '700'}}>
                    view details
                  </Text>
                </View>
              </View>

              <LinearGradient
                colors={['#c900d3', '#5f00d3']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0}}
                style={styles.saveLinera}>
                <Gift />
                <Text style={styles.saveTxt1}>
                  {`Save ${
                    item?.original_price - item?.price
                  }rs/mo Vs monthly pack `}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={styles.conatiner2}>
              <Text style={styles.lastRecharge}>
                {item?.last_recharge && 'Last Recharge'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => onPress1(item)}
              style={styles.container3}>
              <View style={styles.subContain1}>
                <View style={{width: '30%'}}>
                  <Text style={styles.bandWith}>{item?.price}</Text>
                  <Text style={styles.ultimateTxt}>ultimate</Text>
                </View>

                <View style={{width: '30%'}}>
                  <Text style={styles.bandWith}>
                    {`${item?.bandwidth} Mbps`}
                  </Text>
                  <Text style={styles.ultimateTxt}>speed</Text>
                </View>
                <View style={{width: '30%'}}>
                  <Text style={styles.bandWith}>
                    {`${item?.validity} month`}
                  </Text>
                  <Text style={styles.ultimateTxt}>Validity</Text>
                </View>
                <View style={styles.ri8Arrow}>
                  <TouchableOpacity>
                    <RightArrow />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.borderWidthView} />
              <View style={styles.subContain}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'gray'}}>ultimate</Text>
                  <Text style={{color: 'gray', marginLeft: '5%', fontSize: 13}}>
                    Xstream Premimum
                  </Text>
                </View>
                <View>
                  <Text
                    style={{color: 'gray', fontSize: 11, fontWeight: '700'}}>
                    view details
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </>
        )}
      </>
    );
  };
  render() {
    const {data, onPressNavi} = this.props;
    return (
      <>
        <FlatList data={data} renderItem={this.renderData} />
      </>
    );
  }
}
export default Card;
