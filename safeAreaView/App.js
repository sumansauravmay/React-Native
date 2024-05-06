import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import CustomButton from "./components/CustomButton/CustomButton";


export default function App() {
  return (
    <SafeAreaView style={styles.safeareacontainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>welcome!</Text>
          <CustomButton title="press me" onPress={()=>alert("Pressed")}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeareacontainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
      },
      android: {
        fontStyle: "italic",
        color: "blue",
        fontSize: 30,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
