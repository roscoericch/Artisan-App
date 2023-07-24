import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import { Text, View } from "react-native";
import { Tab } from "@rneui/base";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);
  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const [index, setIndex] = useState(0);
  const { push } = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.headerbg,
        },
      }}
      initialRouteName="index"
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="welcome"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="client"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown:false }}
      />
    </Stack>
  );
}
