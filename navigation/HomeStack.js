import ShopOverview from "../screens/ShopOverview.js";
import MoreInfo from "../screens/MoreInfo.js";
import RatingsAndReviews from "../screens/RatingsAndReviews.js";
import BookingForm from "../screens/BookingForm.js";
import SuccessfulBooking from "../screens/SuccessfulBooking.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home.js";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={() => {
            return {
              title: "Home",
              headerTitleStyle: {
                fontFamily: "Rubik_600SemiBold",
                fontSize: 24,
              },
            };
          }}
        />
        <Stack.Screen
          name="ShopOverview"
          component={ShopOverview}
          options={({ route }) => {
            return {
              title: route.params.name,
              headerTitleStyle: {
                fontFamily: "Rubik_600SemiBold",
                fontSize: 24,
              },
            };
          }}
        />
        <Stack.Screen
          name="MoreInfo"
          component={MoreInfo}
          options={({ route }) => ({
            title: route.params.name,
            headerTitleStyle: { fontFamily: "Rubik_600SemiBold", fontSize: 24 },
          })}
        />
        <Stack.Screen
          name="RatingsAndReviews"
          component={RatingsAndReviews}
          options={({ route }) => ({
            title: route.params.name,
            headerTitleStyle: { fontFamily: "Rubik_600SemiBold", fontSize: 24 },
          })}
        />
        <Stack.Screen
          name="BookingForm"
          component={BookingForm}
          options={({ route }) => ({
            title: route.params.name,
            headerTitleStyle: { fontFamily: "Rubik_600SemiBold", fontSize: 24 },
          })}
        />
        <Stack.Screen
          name="SuccessfulBooking"
          component={SuccessfulBooking}
          options={() => ({ title: "" })}
        />
      </Stack.Navigator>
    </>
  );
}
