import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "@react-navigation/native";
import { useState } from "react";
import { Tab, TabView } from "@rneui/base";
import Colors from "../../../../constants/Colors";
import ArtComponent from "../../../../components/home/artisanProfile/artComponent";
import { FlatList } from "react-native-gesture-handler";

export default function artisanProfile() {
  const [index, setIndex] = useState(0);
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
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
            width: "90%",
            alignSelf: "center",
          }}
          indicatorStyle={{
            backgroundColor: Colors.headerbg,
            height: 2,
            borderRadius: 2,
            width: "50%",
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
      <View
        style={{
          height: 3,
          width: "100%",
          backgroundColor: "#D9D9D9",
          elevation: 30,
          shadowColor: "#D9D9D9",
        }}
      ></View>
      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{ flex: 1, backgroundColor: "#FFF" }}>
          <View style={styles.detailsView}>
            <Text style={styles.detailsTitle}>Go-Neat Salon</Text>
            <Text>Block 36D, Flex Plaza along Caleb school, Magodo, Lagos</Text>
          </View>
        </TabView.Item>
        <TabView.Item style={{ flex: 1, backgroundColor: "#FFF" }}>
          <View
            style={{
              flex: 1,
            }}
          >
            <FlatList
              columnWrapperStyle={{
                width: "92%",
                alignSelf: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
              contentContainerStyle={{
                gap: 25,
                paddingVertical: "5%",
              }}
              numColumns={2}
              data={arr}
              renderItem={() => <ArtComponent />}
            />
          </View>
        </TabView.Item>
      </TabView>
      <View style={{ width: "100%" }}>
        <Pressable style={styles.btn}>
          <Link to={"/createSchedule"}>
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
          </Link>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.headerbg,
    width: "90%",
    alignSelf: "center",
    paddingVertical: "4%",
    borderRadius: 3,
    marginVertical: "5%",
  },
  detailsView: {
    flex: 1,
    paddingHorizontal: "5%",
    paddingVertical: "10%",
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
  },
  detailsText: {
    fontSize: 10,
    fontWeight: "400",
    color: "#000",
  },
});
