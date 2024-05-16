import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './Screens/DashboardScreen';
import SettingScreen from './Screens/SettingScreen';

const Drawer=createDrawerNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Dashboard' component={DashboardScreen}
        options={{
          title:"My dashboard",
          drawerLabel:"Dashboard label",
          drawerActiveBackgroundColor:"lightblue",
          drawerActiveTintColor:"#333",
          drawerContentStyle:{
            backgroundColor:"#c6cbef"
          }
        }}
        />
        <Drawer.Screen name='Settings' component={SettingScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

