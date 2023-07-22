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
          headerTitle: "Client",
          header(props) {
            return (
              <View
                style={{
                  backgroundColor: Colors.headerbg,
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column",
                  paddingTop: "12%",
                  paddingBottom: 0,
                  marginBottom: 0,
                  justifyContent: "space-between",
                  alignContent: "space-between",
                  gap: 25,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "98%",
                    justifyContent: "flex-start",
                    paddingHorizontal: "2%",
                    alignItems: "center",
                    gap: 15,
                  }}
                >
                  <Pressable onPress={() => push("welcome")}>
                    <Image
                      style={{ width: 16, height: 16 }}
                      source={require("../assets/icons/arrowback.svg")}
                    />
                  </Pressable>
                  <Text
                    style={{ fontSize: 16, fontWeight: "400", color: "#FFF" }}
                  >
                    Client
                  </Text>
                </View>
                <Tab
                  value={index}
                  style={{
                    backgroundColor: Colors.headerbg,
                    padding: 0,
                    margin: 0,
                  }}
                  indicatorStyle={{
                    backgroundColor: "#FFF",
                    height: 5,
                    borderRadius: 2,
                  }}
                  onChange={(e) => setIndex(e)}
                >
                  <Tab.Item>
                    <Text style={{ color: "#FFF" }}>Login</Text>
                  </Tab.Item>
                  <Tab.Item>
                    <Text style={{ color: "#FFF" }}>Sign Up</Text>
                  </Tab.Item>
                </Tab>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerTitle: "", headerBackVisible: false }}
      />
    </Stack>
  );
}
