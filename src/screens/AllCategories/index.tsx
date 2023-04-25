import React from "react";
import { View, StyleSheet } from "react-native";
import categories from "../../../constants/categories";
import Heading from "../../components/common/Heading";
import CardList from "../../components/expenses/CardList";

const AllCategories = () => {
  return (
    <View style={styles.container}>
      <Heading title="All Spending Categories" />
      <CardList categories={categories} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});

export default AllCategories;