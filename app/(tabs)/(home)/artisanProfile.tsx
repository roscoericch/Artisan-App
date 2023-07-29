import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { useState } from "react";
import { Tab, TabView } from "@rneui/base";
import Colors from "../../../constants/Colors";
import { Image } from "expo-image";

export default function artisanProfile() {
  const [index, setIndex] = useState(0);
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
          backgroundColor: "#FFF",
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
          paddingTop: "6%",
          paddingBottom: 0,
          marginBottom: 0,
          justifyContent: "space-between",
          alignContent: "space-between",
          gap: 25,
        }}
      >
        <Tab
          value={index}
          style={{
            backgroundColor: "#FFF",
            padding: 0,
            margin: 0,
          }}
          indicatorStyle={{
            backgroundColor: Colors.headerbg,
            height: 2,
            borderRadius: 2,
          }}
          titleStyle={{
            width: "50%",
            color: "#D9D9D9",
          }}
          onChange={(e) => setIndex(e)}
        >
          <Tab.Item>
            <Text>Details</Text>
          </Tab.Item>
          <Tab.Item>
            <Text>Portfolio</Text>
          </Tab.Item>
        </Tab>
      </View>
      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{ flex: 1, backgroundColor: "#FFF" }}>
          <View></View>
        </TabView.Item>
        <TabView.Item style={{ flex: 1, backgroundColor: "#FFF" }}>
          <ScrollView></ScrollView>
        </TabView.Item>
      </TabView>
      <View>
        <Pressable style={styles.btn}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "#FFF",
              textAlign: "center",
            }}
          >
            Schedule
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.headerbg,
    width: "90%",
    marginHorizontal: "4%",
    paddingVertical: "4%",
    borderRadius: 3,
    marginVertical: "5%",
  },
});
