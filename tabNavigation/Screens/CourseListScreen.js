import { Text, View, StyleSheet } from "react-native";

const CourseListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Course List Screen</Text>
    </View>
  );
};

export default CourseListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
