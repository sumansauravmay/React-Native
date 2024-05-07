
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import pokemonList from "./data.json";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      {
        pokemonList.map((pokemon)=>( 
          <View key={pokemon.id} style={styles.card}>
            <Text style={styles.cardText}>{pokemon.name}</Text>
            <Text>{pokemon.type}</Text>
          </View>
        ))
      }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop:StatusBar.currentHeight
  },
  scrollView:{
paddingHorizontal:16
  },
  card:{
    backgroundColor:"white",
    padding:16,
    borderRadius:8,
    borderWidth:1,
    marginBottom:16
  },
  cardText:{
    fontSize:30
  }
});
