import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ ...styles.list, paddingTop: 0 }}>
        <View>
          <Image
            style={{ width: 36, height: 36 }}
            source={require("../../../assets/icons/profile.svg")}
          />
        </View>
        <View style={styles.listTitle}>
          <Text style={styles.title}>Edit Profile</Text>
          <View>
            <Image
              style={{ width: 9, height: 9 }}
              source={require("../../../assets/icons/rightArrow.svg")}
            />
          </View>
        </View>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.list}>
        <View
          style={{
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 24, height: 31.5 }}
            source={require("../../../assets/icons/lock.svg")}
          />
        </View>
        <View style={styles.listTitle}>
          <Text style={styles.title}>Change Password</Text>
          <View>
            <Image
              style={{ width: 9, height: 9 }}
              source={require("../../../assets/icons/rightArrow.svg")}
            />
          </View>
        </View>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.list}>
        <View>
          <Image
            style={{ width: 36, height: 36 }}
            source={require("../../../assets/icons/power.svg")}
          />
        </View>
        <View style={styles.listTitle}>
          <Text style={{ ...styles.title, color: "#F00" }}>Sign Out</Text>
          <View>
            {/* <Image
              style={{ width: 9, height: 9 }}
              source={require("../../../assets/icons/rightArrow.svg")}
            /> */}
          </View>
        </View>
      </View>
      <View style={styles.separator}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    marginVertical: 0,
    paddingVertical: 0,
  },
  list: {
    width: "100%",
    display: "flex",
    gap: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: "2%",
    paddingVertical: 15,
  },
  listTitle: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "90%",
    paddingHorizontal: "5%",
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
  },
  separator: {
    backgroundColor: "#D9D9D9",
    height: 1,
    width: "100%",
  },
});
