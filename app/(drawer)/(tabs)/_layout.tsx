import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import Colors from "../../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: Colors.headerbg },
        tabBarActiveTintColor: Colors.tint,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabel: (props) => {
            return (
              <Link
                href={"(home)"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  alignContent: "center",
                }}
              >
                <View>
                  <Text style={{ color: props.color, ...styles.tabtext }}>
                    {props.children}
                  </Text>
                  {props.focused && <View style={styles.indicator}></View>}
                </View>
              </Link>
            );
          },
          tabBarIcon: ({ color }) => (
            <Link href={"(home)"}>
              <MaterialCommunityIcons
                size={26.667}
                name="home-outline"
                color={color}
              />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: "Favourite",
          headerTitle: "",
          tabBarLabel: (props) => {
            return (
              <Link
                href={"favourite"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  alignContent: "center",
                }}
              >
                <View>
                  <Text style={{ color: props.color, ...styles.tabtext }}>
                    {props.children}
                  </Text>
                  {props.focused && <View style={styles.indicator}></View>}
                </View>
              </Link>
            );
          },
          tabBarIcon: ({ color }) => (
            <Link href={"favourite"}>
              <MaterialIcons name="star-outline" size={26.667} color={color} />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          headerTitle: "",
          tabBarLabel: (props) => {
            return (
              <Link
                href={"schedule"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  alignContent: "center",
                }}
              >
                <View>
                  <Text style={{ color: props.color, ...styles.tabtext }}>
                    {props.children}
                  </Text>
                  {props.focused && <View style={styles.indicator}></View>}
                </View>
              </Link>
            );
          },
          tabBarIcon: ({ color }) => (
            <Link href={"schedule"}>
              <MaterialCommunityIcons
                name="calendar-range-outline"
                size={26.667}
                color={color}
              />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          headerTitle: "",
          tabBarLabel: (props) => {
            return (
              <Link
                href={"(profile)"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  alignContent: "center",
                }}
              >
                <View>
                  <Text style={{ color: props.color, ...styles.tabtext }}>
                    {props.children}
                  </Text>
                  {props.focused && <View style={styles.indicator}></View>}
                </View>
              </Link>
            );
          },
          tabBarIcon: ({ color }) => (
            <Link href={"(profile)"}>
              <FontAwesome5 name="user-circle" color={color} size={26.667} />
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    width: 50,
    height: 3,
    backgroundColor: Colors.headerbg,
  },
  tabtext: {
    fontSize: 10,
    fontWeight: "700",
    marginBottom: 1.5,
    textAlign: "center",
  },
});
