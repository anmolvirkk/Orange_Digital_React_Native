import { Text, StyleSheet } from "react-native"

const Heading = ({title}: {title:string}) => {
  return (
      <Text style={styles.heading}>{title}</Text>
  )
}

const styles = StyleSheet.create({
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

export default Heading