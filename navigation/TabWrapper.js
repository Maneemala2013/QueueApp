import Notification from "../screens/Notification.js";
import Settings from "../screens/Settings.js";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { House, ClipboardText, Bell, GearSix } from "phosphor-react-native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import HomeStack from "./HomeStack.js";
import ManageBookingStack from "./ManageBookingStack.js";

const Tab = createBottomTabNavigator();

export default function TabWrapper() {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return <View></View>;
  } else {
    return (
      <Tab.Navigator
        initialRouteName="Explore"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            if (route.name === "Explore") {
              return <House weight="fill" size={28} color={color} />;
            } else if (route.name === "Bookings") {
              return <ClipboardText weight="fill" size={28} color={color} />;
            } else if (route.name === "Notification") {
              return <Bell weight="fill" size={28} color={color} />;
            } else if (route.name === "Settings") {
              return <GearSix weight="fill" size={28} color={color} />;
            }

            // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#E56014",
          tabBarInactiveTintColor: "#F3BB9A",
          tabBarLabelStyle: {
            fontFamily: "Rubik_400Regular",
            fontSize: 12,
            color: "black",
          },
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Explore"
          component={HomeStack}
          options={{
            headerTitleStyle: { fontFamily: "Rubik_600SemiBold", fontSize: 32 },
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={ManageBookingStack}
          options={{
            headerTitleStyle: { fontFamily: "Rubik_600SemiBold", fontSize: 32 },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            headerTitleStyle: { fontFamily: "Rubik_600SemiBold", fontSize: 32 },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitleStyle: { fontFamily: "Rubik_600SemiBold", fontSize: 32 },
          }}
        />
      </Tab.Navigator>
    );
  }
}
