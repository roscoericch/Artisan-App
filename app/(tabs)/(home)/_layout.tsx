import { Stack } from "expo-router";
import Colors from "../../../constants/Colors";

export default function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{ headerStyle: { backgroundColor: Colors.headerbg } }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="artisanProfile"
        options={{
          title: "",
          headerBackVisible: true,
          headerTintColor: "#FFF",
        }}
      />
      <Stack.Screen
        name="location"
        options={{
          presentation: "formSheet",
          title: "Select Location",
          headerTintColor: "#FFF",
        }}
      />
      <Stack.Screen
        name="artisan"
        options={{
          presentation: "modal",
          headerTintColor: "#FFF",
          title: "Select Artisan Type",
        }}
      />
    </Stack>
  );
}
