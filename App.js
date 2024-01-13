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
const Stack = createNativeStackNavigator();

export default function App() {
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
