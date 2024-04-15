import {View, Image, Text, ScrollView, Button, Pressable} from "react-native";
const pic=require("./assets/icon.png");


export default function App(){
 return <View style={{flex:1, backgroundColor:"plum", padding:50}}>
<ScrollView>

<Pressable onPress={()=>console.log("image pressed!")}>
<Image source={pic} style={{height:300, width:300, marginTop:40}}/>
</Pressable>

<Text onPress={()=>console.log("text pressed!")}>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.

The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
</Text>

<Image source={pic} style={{height:300, width:300, marginTop:40}}/>

<Button title="Press" onPress={()=>console.log("I clicked on the button clicked")}/>


</ScrollView>

 </View>
}







