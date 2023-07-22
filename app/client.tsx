import { useState } from "react";
import Login from "../components/userAuth/login";
import SignUp from "../components/userAuth/signup";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import Colors from "../constants/Colors";
import { Tab, TabView } from "@rneui/base";

export default function Client() {
  const [index, setIndex] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab value={index} onChange={(e) => setIndex(e)}>
        <Tab.Item>
          <Text>Login</Text>
        </Tab.Item>
        <Tab.Item>
          <Text>Sign Up</Text>
        </Tab.Item>
      </Tab>
      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{ flex: 1 }}>
          <Login />
        </TabView.Item>
        <TabView.Item style={{ flex: 1 }}>
          <SignUp />
        </TabView.Item>
      </TabView>
    </SafeAreaView>
  );
}
