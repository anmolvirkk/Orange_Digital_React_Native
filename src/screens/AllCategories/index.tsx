import React from "react";
import { View, Text, StyleSheet } from "react-native";
import categories from "../../../constants/categories";
import Card from "../Expenses/card";

const AllCategories = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>All Spending Categories</Text>
      </View>
      {categories.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          text={card.text}
          image={card.image}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
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

export default AllCategories;
