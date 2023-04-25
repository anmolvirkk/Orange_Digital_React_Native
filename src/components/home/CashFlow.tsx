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
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc",
    borderRadius: 5
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: '#82919E',
    textTransform: 'uppercase'
  },
  container: {
    flex: 1,
    marginTop: 24,
    marginBottom: 12,
    backgroundColor: "#ffffff",
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 5
  },
  heading: {
    fontSize: 22,
    fontWeight: '500',
    padding: 12,
    paddingTop: 18,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc"
  }
});

export default CashFlow;