import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkmode}>
        <Text style={styles.darkmodetext}>Style Inheritance</Text>
      </View>
      <Text style={styles.title}>StyleSheet API</Text>

      <View style={[styles.box, styles.lightblue, styles.boxshadow]}>
        <Text>LightBlue Box</Text>
      </View>

      <View style={[styles.box, styles.lightgreen, styles.elevation]}>
        <Text>LightGreen Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 50 },
  darkmode: {
    backgroundColor: "black",
    color: "white",
  },
  darkmodetext: { color: "white", textAlign:"center" },
  title: { color: "red", textAlign: "center" },
  box: {
    width: 250,
    height: 100,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
  },
  lightblue: { backgroundColor: "blue" },
  lightgreen: { backgroundColor: "green" },
  boxshadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  anroidShadow: {
    elevation: 10,
  },
});
