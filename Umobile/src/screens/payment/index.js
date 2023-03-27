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

import RightArrow from '../../assets/svg/common/rightArrow.svg';
import Offer from '../../assets/svg/common/offer.svg';
import LeftArrow from '../../assets/svg/common/leftarrow.svg';
import WalletIcon from '../../assets/svg/common/wallet.svg';
import NetBankIcon from '../../assets/svg/common/bank.svg';
import StarIcon from '../../assets/svg/common/star.svg';
import Card from '../../assets/svg/common/card.svg';
import DownArrow from '../../assets/svg/common/downArror.svg';
import UpArrow from '../../assets/svg/common/upArrow.svg';
import Cancle from '../../assets/svg/common/cancle.svg';
import Eye from '../../assets/svg/common/eye.svg';
import navigationService from '../../routes/navigationService';
import {connect} from 'react-redux';
import styles from '../../components/accordian/styles';
import {
  NetBanking,
  paymentDetail,
  recomended,
  upi,
  walletDetail,
} from '../../components/config';
import Accordian from '../../components/accordian';
import style from './styles';
import Spacer from '../../components/spacer'

class RadioOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: null,
    };
  }
  render() {
    const {data} = this.props;
    return (
      <>
        <View style={data ? styles.bodyShowBefore : styles.bodyShowAfter}>
          {data?.map((item, index) => {
            return (
              <>
                <View style={styles.mapView}>
                  <View style={styles.container1}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({check: index});
                      }}>
                      <Image
                        source={
                          this.state.check == index
                            ? require('../../assets/images/checked.png')
                            : require('../../assets/images/unchecked.png')
                        }
                        style={styles.img}
                      />
                    </TouchableOpacity>

                    <Image
                      source={item?.img}
                      style={styles.img1}
                      resizeMode={'contain'}
                    />
                    <View
                      style={{
                        width: '90%',

                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Text style={styles.txt}>{item?.text}</Text>
                        {item?.desc && (
                          <Text style={styles.descData}>{item?.descData}</Text>
                        )}
                      </View>
                    </View>
                  </View>
                  {item?.link && (
                    <TouchableOpacity style={{width: '30%', marginTop: '2%'}}>
                      <Text style={styles.linkAndPay}>🔗 link&pay</Text>
                    </TouchableOpacity>
                  )}
                </View>
                {item?.coupon && (
                  <View style={styles.cupon}>
                    <View style={styles.offerView}>
                      <Offer />
                      <Text style={styles.offerTxt}>
                        getuptovdjhszjkdsfdjksfdskfgdsuyfgsduyf
                      </Text>
                    </View>

                    <TouchableOpacity style={styles.applyTch}>
                      <Text style={styles.applyTxt}>Applynow</Text>
                    </TouchableOpacity>
                  </View>
                )}

                <View style={styles.bottomBorder1} />
              </>
            );
          })}
        </View>
      </>
    );
  }
}

class CardPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: null,
    };
  }
  render() {
    const {onPressFilter, value, onChange, onPressSearch} = this.props;
    return (
      <View
        style={this.state.show ? styles.showBbodyBefore : styles.showBodyAfter}>
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
                <TouchableOpacity onPress={onPressSearch} style={styles.eye}>
                  <Eye />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bottomBorder} />
        </View>
      </View>
    );
  }
}

class PaymentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAccordion: null,
      accordionData: [
        {
          id: 1,
          icon: <WalletIcon />,
          label: 'Wallet',
          children: <RadioOptions data={walletDetail} />,
        },
        {
          id: 2,
          icon: <NetBankIcon />,
          label: 'NetBanking',
          children: <RadioOptions data={NetBanking} />,
        },
        {
          id: 3,
          icon: <StarIcon />,
          label: 'Recomended',
          children: <RadioOptions data={recomended} />,
        },
        {
          id: 4,
          icon: (
            <Image
              source={require('../../assets/images/upi.png')}
              style={{
                width: '10%',
                height: '60%',
                marginTop: '2%',
                resizeMode: 'contain',
              }}
            />
          ),
          label: 'UPI',
          children: <RadioOptions data={upi} />,
        },
        {
          id: 5,
          icon: <Card />,
          label: 'Credit/Debit/ATM Cards',
          children: <CardPayment />,
        },
      ],
    };
  }

  toggleExpand = () => {
    this.setState({show: !this.state.show});
  };

  handleAccordion = id => {
    if (this.state.activeAccordion === id) {
      this.setState({activeAccordion: null});
    } else {
      this.setState({activeAccordion: id});
    }
  };

  render() {
    const {onPressFilter, paymentData} = this.props;
    let {data} = this.props.route.params;

    return (
      <View
        style={{
          backgroundColor: '#ebf1fe',
          flex: 1,
        }}>
        <View style={style.paymentContainer}>
          <TouchableOpacity
            onPress={() => navigationService.goBack()}
            style={style.touch1}>
            <View style={{alignSelf: 'center', padding: '5%'}}>
              <LeftArrow />
            </View>
          </TouchableOpacity>
          <Text style={style.text1}>Payment</Text>
        </View>
        <ScrollView>
          <View style={style.view1}>
            <View style={style.view2}>
              <Text style={style.text2}>amount Payable</Text>
              <Text style={style.price1}>{` ₹ ${data.price} `}</Text>
            </View>
            <View style={style.bbView}>
              <Text style={style.bbTxt}>BroadBandId:1323345354345335</Text>
            </View>
          </View>

          <View style={style.footerView}>
            <TouchableOpacity style={style.footerTouch}>
              <View style={{backgroundColor: '#0cedc0', borderRadius: 15}}>
                <Offer />
              </View>
              <Text style={style.footerTxt}>selectOffer,More</Text>
              <View style={{marginTop:'2.5%'}}>
              <RightArrow />
              </View>
            
            </TouchableOpacity>
          </View>
          <View style={{marginTop: '5%', width: '90%', alignSelf: 'center'}}>
            <Text style={style.selectTxt}>select Payment Option</Text>
            <View style={style.accordianView}>
              {this.state.accordionData.map(item => (
                <Accordian
                  id={item.id}
                  icon={item?.icon}
                  activeAccordian={this.state.activeAccordion}
                  onPress={id => this.handleAccordion(id)}
                  label={item?.label}>
                  {item.children}
                </Accordian>
              ))}
            </View>
          </View>
        </ScrollView>
    <Spacer height={heightPercentageToDP("2%")}/>
        <View style={{backgroundColor: 'white'}}>
          <View style={style.downView}>
            <View style={style.downView1}>
              <View>
                <Text style={style.priceDown}>{`₹ ${data.price}`}</Text>
                <TouchableOpacity>
                  <Text style={style.downTxt}>VIEW DETAILS</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => {
                  alert('Payment Success');
                }}
                style={style.downTch}>
                <Text style={style.payTxt}>pay now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    paymentData: state.paymentData,
  };
};

const Payment = connect(mapStateToProps, null)(PaymentClass);

export default Payment;
