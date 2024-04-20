import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar
        backgroundColor="lightgreen"
        // barStyle="dark-content"
        barStyle="light-content" 
        // hidden
      />
      <ActivityIndicator/>
      <ActivityIndicator size="large"/>
      <ActivityIndicator size="large" color="midnightblue"/>
      <ActivityIndicator size="large" color="midnightgreen" animating={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
