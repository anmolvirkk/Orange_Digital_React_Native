import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ExpensesStackParamList } from "../../../types";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ViewAll : React.FC = () => {
  const navigator = useNavigation<NativeStackNavigationProp<ExpensesStackParamList>>()
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
  }
});

export default ViewAll