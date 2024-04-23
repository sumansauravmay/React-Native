import { View, Text, StyleSheet } from "react-native";
import Greet from "./folder/Greet";

export default function App() {
  return (
    <View style={styles.container}>
      <Greet name="Suman" />
      <Greet name="Saurav" />
      <Text style={styles.title}>StyleSheet API</Text>

      <View style={[styles.box, styles.lightblue]}>
        <Text>LightBlue Box</Text>
      </View>

      <View style={[styles.box, styles.lightgreen]}>
        <Text>LightGreen Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 50 },
  title: { color: "red", textAlign: "center" },
  box: {
    width: 150,
    height: 100,
    // padding: 10,
    paddingHorizontal:10,
    paddingVertical:10,
    marginVertical:10,
    marginHorizontal:10,
    borderWidth:2,
    borderColor:"purple",
    borderRadius:5

  },
  lightblue: { backgroundColor: "blue" },
  lightgreen: { backgroundColor: "green"},
});
