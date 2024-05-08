import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import pokemonList from "./data.json";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardText}>{item.name}</Text>
              <Text>{item.type}</Text>
            </View>
          )}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
         ListEmptyComponent={<Text>No Item Found</Text>}
         ListHeaderComponent={<Text style={styles.header}>Pokemon List</Text>}
        ListFooterComponent={<Text style={styles.footer}>End Of List</Text>}
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
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  header:{
    fontSize:24,
    textAlign:"center",
    margin:12
  },
  footer:{
    fontSize:24,
    textAlign:"center",
    margin:12
  }
});
