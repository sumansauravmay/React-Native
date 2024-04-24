
import { StyleSheet, View, ScrollView } from 'react-native';
import Box from './component/Box';

export default function App() {
  return (
    // <View style={{backgroundColor:"plum", flex:1}}></View>
    <View style={styles.container}>
      
    {/* <Box style={{backgroundColor:"#8e9b00",flex:1}}>Box 1</Box> */}
    <Box style={{backgroundColor:"#8e9b00"}}>Box 1</Box>
    <Box style={{backgroundColor:"#b65d1f"}}>Box 2</Box>
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
    // flex:1,
    // flexWrap:"nowrap",
    flexWrap:"wrap",
    // flexWrap:"wrap-reverse",

    height:300,

    // alignContent:"flex-start",
    // alignContent:"flex-end",
    // alignContent:"center",
    // alignContent:"stretch",
    // alignContent:"space-between",
    alignContent:"space-around",

    // alignItems:"stretch",
    // alignItems:"flex-start",
    // alignItems:"flex-end",
    // alignItems:"center",
    // alignItems:"baseline",

    // flexDirection:'column-reverse',
    // flexDirection:'row-reverse',
    // flexDirection:'row',

    // justifyContent:"flex-start",
    // justifyContent:"flex-end",
    // justifyContent:"center",
    // justifyContent:"space-evenly",

    marginTop:60,
    borderWidth:6,
    borderColor:"red"
  },
});





