import React from "react";
import { View, StyleSheet } from "react-native";
import categories from "../../../constants/categories";
import Heading from "../common/Heading";
import ViewAll from "./ViewAll";
import CardList from "./CardList";

const Categories : React.FC = () => {
  return (
    <View style={styles.container}>
      <Heading title="Top Spending Categories" />
      <CardList categories={categories} />
      <ViewAll />
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

export default Categories;
