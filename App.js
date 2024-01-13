// Ref:
// Tab Navigation: https://reactnavigation.org/docs/tab-based-navigation/
// Icons: https://ionic.io/ionicons
// Multiple Navigators: https://www.youtube.com/watch?v=s7ackFpN-GU
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "./navigation/HomeStack.js";
import TabWrapper from "./navigation/TabWrapper.js";
// import {
//   useFonts,
//   Rubik_300Light,
//   Rubik_400Regular,
//   Rubik_500Medium,
//   Rubik_600SemiBold,
//   Rubik_700Bold,
//   Rubik_800ExtraBold,
//   Rubik_900Black,
//   Rubik_300Light_Italic,
//   Rubik_400Regular_Italic,
//   Rubik_500Medium_Italic,
//   Rubik_600SemiBold_Italic,
//   Rubik_700Bold_Italic,
//   Rubik_800ExtraBold_Italic,
//   Rubik_900Black_Italic,
// } from '@expo-google-fonts/rubik';

// const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator();

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   Rubik_300Light,
  //   Rubik_400Regular,
  //   Rubik_500Medium,
  //   Rubik_600SemiBold,
  //   Rubik_700Bold,
  //   Rubik_800ExtraBold,
  //   Rubik_900Black,
  //   Rubik_300Light_Italic,
  //   Rubik_400Regular_Italic,
  //   Rubik_500Medium_Italic,
  //   Rubik_600SemiBold_Italic,
  //   Rubik_700Bold_Italic,
  //   Rubik_800ExtraBold_Italic,
  //   Rubik_900Black_Italic,
  // });

  // if (!fontsLoaded) {
  //   return <SafeAreaView style={{flex: 1}}></SafeAreaView>;
  // } else {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <TabWrapper />
      </NavigationContainer>
    </SafeAreaView>
  );
  // }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
