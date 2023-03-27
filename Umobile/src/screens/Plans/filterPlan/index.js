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
class FilterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.selectedPlan,
    };
  }
  componentDidMount() {
    this.eventListener1 = DeviceEventEmitter.addListener(
      'filter',
      this.eventHandlers,
    );
  }
  eventHandlers = data => {
    console.log(data, 'datads');
    this.setState({data: data});
  };
  componentWillUnmount() {
    this.eventListener1.remove();
  }

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
            onPress1={() => {
              navigationService.navigate(SCREENS.payment);
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

const FilterComponent = connect(mapStateToProps, null)(FilterClass);

export default FilterComponent;
