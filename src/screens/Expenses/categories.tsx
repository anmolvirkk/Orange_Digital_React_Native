import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons' 
import { useNavigation } from "@react-navigation/native";
import categories from "../../../constants/categories";
import Card from "./card";

const ViewAll = () => {
  const navigator = useNavigation()
  const onPress = () => {
    navigator.navigate('AllCategories')
  }
  return (
    <TouchableOpacity style={{...styles.card, padding: 12, borderBottomWidth: 0}} onPress={onPress}>
      <View style={{...styles.details, padding: 8}}>
        <Text style={{...styles.title, textTransform: 'none'}}>View all categories</Text>
      </View>
      <Feather name="chevron-right" style={{color: '#929EAA'}} size={30} />
    </TouchableOpacity>
  )
}

const Categories = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Top Spending Categories</Text>
      </View>
      {categories.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          text={card.text}
          image={card.image}
        />
      ))}
      <ViewAll />
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

export default Categories;
