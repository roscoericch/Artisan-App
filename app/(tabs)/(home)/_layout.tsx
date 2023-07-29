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
        options={{ title: "", headerBackVisible: false }}
      />
    </Stack>
  );
}
