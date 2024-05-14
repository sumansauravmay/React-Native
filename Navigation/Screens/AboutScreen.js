import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AboutScreen() {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>About Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
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
