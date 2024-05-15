import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function HomeScreen({ navigation, route }) {
    const {name}=route.params;
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Home Screen of {name}</Text>
      <Text>{route.params?.result}</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About", {
            name:"Suman",
        })}
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


