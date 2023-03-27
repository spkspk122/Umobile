import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  DeviceEventEmitter,
} from 'react-native';
import React, {Component} from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Header from '../../components/header';
import ContactInput from '../../components/contactsearchinput';

import styles from './styles';

import Close from '../../assets/svg/common/close.svg';

import FilterComponent from '../Plans/filterPlan';

import navigationService from '../../routes/navigationService';
import {connect} from 'react-redux';
import * as Payment from '../../redux/actions/index';
import {SET_PAYMENT} from '../../redux/actionTypes';
import {Mbps} from '../../components/config';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0,
      data: Mbps,
      bandwidthFilter: null,
      value: this.props.selectedPlan,
    };
  }

  handleFilterOperation = value => {
    this.setState({bandwidthFilter: value});
    const {selectedPlan} = this.props;
    if (selectedPlan.some(data => data.bandwidth == value)) {
      let filteredMbData = this.state.value.filter(
        data => data.bandwidth == value,
      );

      DeviceEventEmitter.emit('filter', filteredMbData);
      console.log(filteredMbData, '£££££££');
    }
  };

  renderTabs = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          style={
            this.state.bandwidthFilter === item?.value
              ? styles.thouch
              : styles.touchAfter
          }
          onPress={() => {
            this.handleFilterOperation(item?.value);
          }}>
          <View style={{}}>
            <Text
              style={
                this.state.bandwidthFilter === item?.value
                  ? styles.textBefore
                  : styles.txtAfter
              }>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  render() {
    const {data} = this.state;
    return (
      <View style={{backgroundColor: 'black', flex: 1}}>
        <Header
          onPress1={() => {
            alert('hi');
          }}
        />
        <ContactInput />
        <View style={styles.mainCntainer}>
          <View style={styles.subContainer} />
          <View style={styles.flatView}>
            <TouchableOpacity onPress={() => navigationService.goBack()}>
              <Close />
            </TouchableOpacity>

            <FlatList
              horizontal={true}
              contentContainerStyle={{justifyContent: 'space-between'}}
              data={data}
              renderItem={this.renderTabs}
            />
          </View>
          <View style={{marginBottom: heightPercentageToDP('10%')}}>
            <FilterComponent />
          </View>
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
const Actions = {
  ...Payment,
};

const mapDispatchToProps = dispatch => {
  return {
    triggerFilterData: filteredData =>
      dispatch({type: SET_PAYMENT, payload: filteredData}),
  };
};

const FilterScreen = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterScreen;
