import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons' 
import { ExpensesCardType } from "../../../types";

const Card : React.FC<ExpensesCardType> = ({ title, text, image }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Feather name="chevron-right" style={{color: '#929EAA'}} size={30} />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
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
  text: {
    fontSize: 18,
    color: "#000",
  }
});

export default Card