import {View, Text, StyleSheet} from 'react-native';



export default function Box(prop){
    const {children, style}=prop;
    return (
        <View style={[styles.box,style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
} 


const styles=StyleSheet.create({
    box:{
        backgroundColor:"#fff",
        padding:20,
        heigth:50,
        width:50
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center", 
        color:"white"
    }
})