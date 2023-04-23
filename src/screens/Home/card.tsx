import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import addCommas from "../../utility/addCommas";

const Card = ({ name, type, icon, amount }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={icon} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.text}>{type}</Text>
      </View>
        <Text style={styles.text}>${addCommas(amount.toString())}</Text>
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
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: '#82919E',
    textTransform: 'uppercase'
  },
  text: {
    fontSize: 18,
    color: "#000",
    textTransform: 'capitalize'
  }
});

export default Card