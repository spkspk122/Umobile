import { StyleSheet } from "react-native";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const style = StyleSheet.create({
  paymentContainer: {
    flexDirection: "row",
    marginTop: heightPercentageToDP("5%"),
  },
  touch1: {
    backgroundColor: "#ffffff",
    borderColor: "#e5eaf1",
    borderWidth: 2,
    padding: "1%",
    width: "12%",
    marginLeft: "5%",
    borderRadius: heightPercentageToDP("10%"),
  },
  text1: {
    color: "black",
    fontSize: heightPercentageToDP("2.8%"),
    fontWeight: "500",
    alignSelf: "center",
    marginLeft: heightPercentageToDP("11%"),
  },
  view1: {
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    elevation: 3,
    marginTop: "5%",
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginTop: "4%",
  },
  text2: {
    color: "black",
    fontSize: heightPercentageToDP("2%"),
    fontWeight: "500",
    width: "75%",
  },
  price1: {
    color: "black",
    fontSize: heightPercentageToDP("1.8%"),
    fontWeight: "500",
    width: "15%",
  },
  bbView: {
    width: "90%",
    alignSelf: "center",
    marginVertical: "4%",
  },
  bbTxt: {
    color: "gray",
    fontSize: heightPercentageToDP("1.5%"),
    fontWeight: "500",
  },
  footerView: {
    backgroundColor: "#f8f9fe",
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    elevation: 3,
    marginTop: "5%",
  },
  footerTouch: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginVertical: "4%",
  },
  footerTxt: {
    color: "black",
    fontSize: heightPercentageToDP("1.8%"),
    fontWeight: "500",
    width: "70%",
    marginTop: "2%",
  },
  selectTxt: {
    color: "black",
    fontSize: heightPercentageToDP("1.8%"),
    fontWeight: "500",
    width: "70%",
  },
  accordianView: {
    marginTop: "5%",
    shadowRadius: 2,
    shadowOpacity: 0.3,
    elevation: 3,
  },
  downView: {
    width: "90%",
    alignSelf: "center",
    marginVertical: "5%",
  },
  downView1: {
    flexDirection: "row",

    justifyContent: "space-between",
  },
  priceDown: {
    color: "black",
    fontSize: heightPercentageToDP("2%"),
    fontWeight: "700",
  },
  downTxt: {
    color: "#00008B",
    fontSize: heightPercentageToDP("1.5%"),
    fontWeight: "500",
  },
  downTch: {
    width: "30%",
    backgroundColor: "#40e0d0",
    borderRadius: 10,
    padding: "4%",
  },
  payTxt: {
    color: "#00008B",
    fontSize: heightPercentageToDP("1.8%"),
    fontWeight: "700",
    textAlign: "center",
  },
});

export default style;
