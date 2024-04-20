import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';

export default function App() {
  const [ishidden,setIshidden]=useState(false);
  const [activity, setActivity]=useState(false);



  const checkstatus=()=>{
    setActivity(!activity);
  }

  return (
    <View style={{flex:1, backgroundColor:"plum", padding:50}}>
  {/* StatusBar */}
      <StatusBar backgroundColor='lightgreen' hidden={ishidden}/>
    <Button onPress={()=>setIshidden(!ishidden)} title="Status"/>



{/* ActivityIndicator */}

<ActivityIndicator size="large" color="midnightgreen" animating={activity}/>
<Button onPress={checkstatus} title="Activity"/>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
