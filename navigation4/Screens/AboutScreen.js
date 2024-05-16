import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

export default function AboutScreen({ route }) {
  const { name } = route.params;
  const navigation = useNavigation();

useLayoutEffect(()=>{
    navigation.setOptions({
        title:name
    })
},[navigation, name])

  return (
    <View style={Styles.container}>
      <Button
        title="Update the Name"
        onPress={() =>
          navigation.setParams({
            name: "Codevolution",
          })
        }
      />

      <Text style={Styles.text}>About Screen of {name}</Text>

      <Button
        title="Go back with data"
        onPress={() =>
          navigation.navigate("Home", { result: "Data from About" })
        }
      />

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
  button: {
    marginTop: 100,
  },
});


