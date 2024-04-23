import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greet from './folder/Greet';

export default function App() {
  return (
    <View style={{flex:1, backgroundColor:"plum", padding:60}}>
      <Greet name="Suman"/>
      <Greet name="Saurav"/>
    </View>
  );
}


