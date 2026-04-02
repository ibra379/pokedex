import { StyleSheet, Text, View } from "react-native";


export default function About() {
  return (
    <View style={styles.container}>
      <Text>ABOUT SCREEN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
  }
})