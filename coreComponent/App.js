import { View, Text, Image } from "react-native";
const pic=require("./assets/icon.png");

export default function App() {
  return <View style={{flex:1, backgroundColor:"red"}}>

    <View style={{width:200, height:200, backgroundColor:"blue"}}>
    </View>

    <View style={{width:200, height:200, backgroundColor:"green", padding: 30}}>
      <Text>
        <Text style={{color:"white"}}>Hello </Text>
        React Native</Text>
    </View>

<View>
<Image source={pic} style={{height:300, width:300}}/>
</View>

<View>
<Image source={{uri:"https://picsum.photos/300"}} style={{height:300, width:300}}/>
</View>


  </View>;
}
