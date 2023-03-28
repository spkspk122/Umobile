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
} from "react-native";
import React, { Component } from "react";
import { heightPercentageToDP } from "react-native-responsive-screen";

import Header from "../../components/header";
import ContactInput from "../../components/contactsearchinput";
import SearchInput from "../../components/searchInput";
import styles from "./styles";

import Phno from "../../assets/svg/common/phno.svg";
import Search from "../../assets/svg/common/search.svg";

import Basic from "../Plans/Basic";
import MoneySaver from "../Plans/MoneySaver";
import Entertainment from "../Plans/Entertainment";
import Recomended from "../Plans/recommended";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import navigationService from "../../routes/navigationService";
import { SCREENS } from "../../constants";
import { connect } from "react-redux";
import * as Payment from "../../redux/actions/index";
import { SET_PAYMENT } from "../../redux/actionTypes";
import { bindActionCreators } from "redux";

class UmobileClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0,
      filter: "",
      contacts: [],
      data: this.props.selectedPlan,
    };
  }

  handleChange = (txt) => {
    this.setState({ filter: txt });
    const { selectedPlan } = this.props;
    if (selectedPlan.some((data) => data.price == txt)) {
      let filteredData = this.state.data.filter((data) => data.price == txt);

      DeviceEventEmitter.emit("vvv", filteredData);
    } else if (selectedPlan.some((data) => data.bandwidth == txt)) {
      let filteredMbData = this.state.data.filter(
        (data) => data.bandwidth == txt
      );

      DeviceEventEmitter.emit("vvv", filteredMbData);
    } else if (selectedPlan.some((data) => data.validity == txt)) {
      let filteredValidityData = this.state.data.filter(
        (data) => data.validity == txt
      );

      DeviceEventEmitter.emit("vvv", filteredValidityData);
    }
    if (txt === "") {
      DeviceEventEmitter.emit("vvv", selectedPlan);
    }

    console.log(txt, "filter");
  };

  renderData() {
    const { filter, contacts } = this.state;
    const Tab = createMaterialTopTabNavigator();
    return (
      <>
        <SearchInput
          onChange={(txt) => {
            this.handleChange(txt);
            // console.log(txt, 'ggggg');
          }}
          value={filter}
          onPressFilter={() => navigationService.navigate(SCREENS.fliter)}
        />
        <View
          style={{
            flex: 1,
            marginTop: "5%",
            backgroundColor: "#FAF6FE",
          }}
        >
          <Tab.Navigator
            screenOptions={{
              swipeEnabled: true,
              tabBarActiveTintColor: "black",
              tabBarInactiveTintColor: "gray",
              tabBarIndicatorStyle: {
                borderColor: "black",
                borderWidth: Platform.OS == "ios" ? 0.5 : 1,
                backgroundColor: "white",
              },

              tabBarLabelStyle: {
                fontSize: heightPercentageToDP("1.3%"),
                fontWeight: "500",
              },

              tabBarScrollEnabled: true,
              tabBarStyle: {
                backgroundColor: "#FAF6FE",
              },
            }}
          >
            <Tab.Screen name={"recomended"} component={Recomended} />
            <Tab.Screen
              name={"moneySaver"}
              component={MoneySaver}
              options={{}}
            />

            <Tab.Screen name={"entertainment"} component={Entertainment} />
            <Tab.Screen name={"basic"} component={Basic} />
          </Tab.Navigator>
        </View>
      </>
    );
  }

  render() {
    const { filter, contacts } = this.state;
    const Tab = createMaterialTopTabNavigator();
    return (
      <View style={{ backgroundColor: "black", flex: 1 }}>
        <Header
          onPress1={() => {
            alert("hi");
          }}
        />
        <ContactInput
          data={contacts}
          placeholder={"01234567890_tg"}
          placeholderTextColor={"white"}
        />
        <View style={styles.mainCntainer}>
          <View style={styles.subContainer} />
          {this.renderData()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPlan: state.selectedPlan,
  };
};
const Actions = {
  ...Payment,
};

const mapDispatchToProps = (dispatch) => {
  return {
    // actions: bindActionCreators(Actions, dispatch),
    triggerFilterData: (filteredData) =>
      dispatch({ type: SET_PAYMENT, payload: filteredData }),

    // setFilterData: (filterData) => dispatch(setFilterData(filterData))
  };
};

const Umobile = connect(mapStateToProps, mapDispatchToProps)(UmobileClass);

export default Umobile;
