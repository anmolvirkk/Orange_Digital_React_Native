import React from "react";
import { View, StyleSheet } from "react-native";
import cashData from "../../../constants/cashData";
import Heading from "../common/Heading";
import CardList from "./CardList";

const CashFlow = () => {
  return (
    <View style={styles.container}>
      <Heading title="Cash" />
      <CardList cashData={cashData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    marginBottom: 12,
    backgroundColor: "#ffffff",
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 5
  }
});

export default CashFlow;