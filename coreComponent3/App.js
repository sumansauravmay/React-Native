import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [isvisible, setIsvisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button onPress={() => setIsvisible(true)} title="Press" />

      <Modal
        visible={isvisible}
        onRequestClose={() => setIsvisible(true)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Content</Text>
          <Button
            onPress={() => setIsvisible(false)}
            title="close"
            color="midnightblue"
          />
        </View>
      </Modal>
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
