import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => (
  <View style={style.container}>   
    <Text style={style.titleStyle}>{props.title}</Text>
  </View>
);

export default Header;

const style = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: "#6ca2f7",
    alignItems: "center",
    justifyContent: "center"
  },

  titleStyle: {
    fontSize: 50,
    color: "#fff"
  }
});
