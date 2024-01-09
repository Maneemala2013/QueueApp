import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home.js';
import Booking from '../screens/Booking.js';
import Notification from '../screens/Notification.js';
import Settings from '../screens/Settings.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopOverview from '../screens/ShopOverview.js';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigation() {
    return(
      <Tab.Navigator
        initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Booking') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              } else if (route.name === 'Notification') {
                iconName = focused ? 'notifications' : 'notifications-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
          })}
        >
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Booking" component={Booking} />
          <Tab.Screen name="Notification" component={Notification} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
  }

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home2"
                component={TabNavigation}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="ShopOverview" component={ShopOverview}/>
        </Stack.Navigator>
    )
  }


