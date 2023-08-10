import { useState } from "react";
import Login from "../components/userAuth/login";
import SignUp from "../components/userAuth/signup";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import Colors from "../constants/Colors";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { Tab, TabView } from "@rneui/base";
import { Image } from "expo-image";

export default function Client() {
  const [index, setIndex] = useState(0);
  const { push } = useRouter();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        borderBottomColor: "",
      }}
    >
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
        <Pressable
          onPress={() => push("welcome")}
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
          <View>
            <Image
              style={{ width: 16, height: 16 }}
              source={require("../assets/icons/arrowback.svg")}
            />
          </View>
          <Text style={{ fontSize: 16, fontWeight: "400", color: "#FFF" }}>
            Client
          </Text>
        </Pressable>
        <Tab
          value={index}
          style={{
            backgroundColor: Colors.headerbg,
            padding: 0,
            margin: 0,
            width: "90%",
            alignSelf: "center",
          }}
          indicatorStyle={{
            backgroundColor: "#FFF",
            height: 5,
            borderRadius: 2,
            width: "50%",
            alignSelf: "center",
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
      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{ flex: 1, backgroundColor: "#FFF" }}>
          <Login />
        </TabView.Item>
        <TabView.Item style={{ flex: 1, backgroundColor: "#FFF" }}>
          <SignUp />
        </TabView.Item>
      </TabView>
    </View>
  );
}
