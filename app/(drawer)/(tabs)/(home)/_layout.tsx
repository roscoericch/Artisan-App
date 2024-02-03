import { Stack } from "expo-router";
import Colors from "../../../../constants/Colors";

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
          presentation: "transparentModal",
          // headerShown: false,
          // contentStyle: { height: "50%", maxHeight: "50%", flex: 0.5 },
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
      <Stack.Screen
        name="createSchedule"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
