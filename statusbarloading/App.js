import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Alert } from 'react-native';

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

{/* Alert */}

<Button onPress={()=>Alert.alert("Invalid Data!", "DOB incorrect!")} title="Alert" />


<Button onPress={()=>Alert.alert("Invalid Data!", "DOB incorrect!",[
  {text:"Cancel", onPress:()=>console.log("Cancel Pressed")},
  {text:"OK", onPress:()=>console.log("Ok Pressed")}
])} title="Alert2" />

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
