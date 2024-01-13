import ShopOverview from "../screens/ShopOverview.js";
import MoreInfo from "../screens/MoreInfo.js";
import RatingsAndReviews from "../screens/RatingsAndReviews.js";
import BookingForm from "../screens/BookingForm.js";
import SuccessfulBooking from "../screens/SuccessfulBooking.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home.js";
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
        initialRouteName="Bookings"
        screenOptions={
          {
            //   headerShown: false,
          }
        }
      >
        <Stack.Screen
          name="Home"
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
