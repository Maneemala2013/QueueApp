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
import MoreInfo from '../screens/MoreInfo.js';
import RatingsAndReviews from '../screens/RatingsAndReviews.js';
import BookingForm from '../screens/BookingForm.js';
import SuccessfulBooking from '../screens/SuccessfulBooking.js';
import { House, ClipboardText, Bell, GearSix } from 'phosphor-react-native';
import {
  useFonts,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from '@expo-google-fonts/rubik';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigation() {
    let [fontsLoaded] = useFonts({
      Rubik_400Regular,
      Rubik_600SemiBold,
    });

    if (!fontsLoaded) {
      return (<View></View>);
      } else {
      return(
        <Tab.Navigator
          initialRouteName="Explore"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color }) => {
                let iconName;
    
                if (route.name === 'Explore') {
                  return <House weight='fill' size={28} color={color} />;
                } else if (route.name === 'Bookings') {
                  return <ClipboardText weight='fill' size={28} color={color} />;
                } else if (route.name === 'Notification') {
                  return <Bell weight='fill' size={28} color={color} />;
                } else if (route.name === 'Settings') {
                  return <GearSix weight='fill' size={28} color={color} />;
                }
    
                // You can return any component that you like here!
                // return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#E56014',
              tabBarInactiveTintColor: '#F3BB9A',
              tabBarLabelStyle: {fontFamily: "Rubik_400Regular", fontSize: 12, color: "black"}
              // headerShown: false
            })}
          >
            <Tab.Screen name="Explore" component={Home} options={{headerTitleStyle: {fontFamily: "Rubik_600SemiBold", fontSize: 32}}}/>
            <Tab.Screen name="Bookings" component={Booking} options={{headerTitleStyle: {fontFamily: "Rubik_600SemiBold", fontSize: 32}}}/>
            <Tab.Screen name="Notification" component={Notification} options={{headerTitleStyle: {fontFamily: "Rubik_600SemiBold", fontSize: 32}}}/>
            <Tab.Screen name="Settings" component={Settings} options={{headerTitleStyle: {fontFamily: "Rubik_600SemiBold", fontSize: 32}}}/>
          </Tab.Navigator>
      )
    }
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
            <Stack.Screen name="ShopOverview" component={ShopOverview} options={({ route }) => ({ title: route.params.name, headerTitleStyle: {fontFamily: "Rubik_600SemiBold", fontSize: 24}})}/>
            <Stack.Screen name="MoreInfo" component={MoreInfo} options={({ route }) => ({ title: route.params.name, headerTitleStyle: {fontFamily: "Rubik_600SemiBold", fontSize: 24}})}/>
            <Stack.Screen name="RatingsAndReviews" component={RatingsAndReviews} options={({ route }) => ({ title: route.params.name, headerTitleStyle: {fontFamily: "Rubik_600SemiBold", fontSize: 24} })}/>
            <Stack.Screen name="BookingForm" component={BookingForm} options={({ route }) => ({ title: route.params.name, headerTitleStyle: {fontFamily: "Rubik_600SemiBold", fontSize: 24} })}/>
            <Stack.Screen name="SuccessfulBooking" component={SuccessfulBooking} options={({ route }) => ({ title: ""} )}/>
        </Stack.Navigator>
    )
  }


