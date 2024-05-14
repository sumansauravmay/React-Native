import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
