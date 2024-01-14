import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Booking from "../screens/ManageBooking/Booking.js";
import PastBooking from "../screens/ManageBooking/PastBooking.js";
import UpcomingBooking from "../screens/ManageBooking/UpcomingBooking.js";

const Stack = createNativeStackNavigator();

export default function ManageBookingStack() {
  const fontName = "Rubik_600SemiBold";
  const fontSize = 24;
  const headerStyle = {
    fontFamily: fontName,
    fontSize: fontSize,
  };
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={() => {
            return {
              title: "Booking",
              headerTitleStyle: headerStyle,
            };
          }}
        />
        <Stack.Screen
          name="PastBooking"
          component={PastBooking}
          options={() => {
            return {
              title: "PastBooking",
              headerTitleStyle: headerStyle,
            };
          }}
        />
        <Stack.Screen
          name="UpcomingBooking"
          component={UpcomingBooking}
          options={() => {
            return {
              title: "UpcomingBooking",
              headerTitleStyle: headerStyle,
            };
          }}
        />
      </Stack.Navigator>
    </>
  );
}
