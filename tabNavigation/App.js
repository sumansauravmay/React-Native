import { StatusBar } from 'expo-status-bar';import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CourseListScreen from './Screens/CourseListScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingScreen from './Screens/SettingScreen';
import Ionicons from "@expo/vector-icons/Ionicons";


const Tab= createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
     <Tab.Navigator 
     screenOptions={{
      tabBarLabelPosition: "below-icon",
      tabBarShowLabel: true,
      tabBarActiveTintColor:"purple",
      tabBarInactiveTintColor:"red"
     }}
     >
      <Tab.Screen name='Course List' component={CourseListScreen}/>
      <Tab.Screen name='Profile List' component={ProfileScreen}
      options={{
        tabBarLabel:"My Profile",
        tabBarIcon:({color})=><Ionicons name="person" size={20} color="blue"/>,
        tabBarBadge: 3
     
     
      }}
      />
      <Tab.Screen name='Setting List' component={SettingScreen}/>
     </Tab.Navigator>
    </NavigationContainer>
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
