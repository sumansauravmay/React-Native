
import { StyleSheet, View } from 'react-native';
import Box from './component/Box';

export default function App() {
  return (
    // <View style={{backgroundColor:"plum", flex:1}}></View>
    <View style={styles.container}>
    <Box style={{backgroundColor:"#8e9b00",flex:1}}>Box 1</Box>
    <Box style={{backgroundColor:"#b65d1f",flex:3}}>Box 2</Box>
    <Box style={{backgroundColor:"#1c4c56"}}>Box 3</Box>
    <Box style={{backgroundColor:"#ab9156"}}>Box 4</Box>
    <Box style={{backgroundColor:"#6b0803"}}>Box 5</Box>
    <Box style={{backgroundColor:"#1c4c56"}}>Box 6</Box>
    <Box style={{backgroundColor:"#b95f21"}}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:60,
    borderWidth:6,
    borderColor:"red"
  },
});





