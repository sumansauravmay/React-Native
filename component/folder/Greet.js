import {View, Text} from 'react-native';


export default function Greet(prop){
    const {name}=prop;
    return (
        <View>
            <Text>Hello, {name}</Text>
        </View>
    )
}




