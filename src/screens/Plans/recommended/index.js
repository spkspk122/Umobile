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
  DeviceEventEmitter,
} from 'react-native';
import React, {Component} from 'react';
import Card from '../../../components/card';
import {broadbandPlan} from '../../../components/config';
import {connect} from 'react-redux';
import navigationService from '../../../routes/navigationService';
import {SCREENS} from '../../../constants';
class RecomendedClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.selectedPlan,
    };
  }
  componentDidMount() {
    this.eventListener = DeviceEventEmitter.addListener(
      'vvv',
      this.eventHandler,
    );
  }
  eventHandler = data => {
    this.setState({data: data});
  };
  componentWillUnmount() {
    this.eventListener.remove();
  }

  handlePaymentScreen = data => {
    navigationService.navigate(SCREENS.payment, {data: data});
    console.log(data, 'daattt');
  };

  render() {
    const {data} = this.state;

    return (
      <View
        style={{
          width: '100%',

          backgroundColor: '#FAF6FE',
        }}>
        <View style={{width: '90%', alignSelf: 'center', marginTop: '5%'}}>
          <Card
            data={this.state.data}
            onPress1={item => {
              this.handlePaymentScreen(item);
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedPlan: state.selectedPlan,
  };
};

const Recomended = connect(mapStateToProps, null)(RecomendedClass);

export default Recomended;
