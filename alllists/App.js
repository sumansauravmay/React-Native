import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList
} from "react-native";
import pokemonList from "./data.json";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
      <FlatList 
      data={pokemonList}
      renderItem={({item})=>(
        <View key={item.id} style={styles.card}>
            <Text style={styles.cardText}>{item.name}</Text>
            <Text>{item.type}</Text>
          </View>
      )}
      keyExtractor={(item, index)=>item.id.toString()}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
});
