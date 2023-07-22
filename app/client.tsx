import { useState } from "react";
import Login from "../components/userAuth/login";
import SignUp from "../components/userAuth/signup";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import Colors from "../constants/Colors";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { Tab, TabView } from "@rneui/base";

export default function Client() {
  const [index, setIndex] = useState(0);
  const route = useRoute();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        borderBottomColor: "",
      }}
    >
      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{ flex: 1, backgroundColor: "#FFF" }}>
          <Login />
        </TabView.Item>
        <TabView.Item style={{ flex: 1, backgroundColor: "#FFF" }}>
          <SignUp />
        </TabView.Item>
      </TabView>
    </SafeAreaView>
  );
}
