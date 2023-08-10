import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, Pressable, View } from "react-native";
import Colors from "../constants/Colors";
import { Link } from "@react-navigation/native";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={{ ...styles.button, backgroundColor: "#FFF" }}>
        <Link style={styles.link} to={"artisan"}>
          <Text style={{ ...styles.buttonText, color: Colors.headerbg }}>
            Access as Artisan
          </Text>
        </Link>
      </Pressable>

      <Pressable
        style={{
          ...styles.button,
          backgroundColor: Colors.headerbg,
          borderColor: "#FFF",
        }}
      >
        <Link style={styles.link} to={"/client"}>
          <Text style={{ ...styles.buttonText, color: "#FFF" }}>
            Access as Client
          </Text>
        </Link>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.headerbg,
    flex: 1,
    gap: 20,
    paddingHorizontal: 15,
    alignItems: "stretch",
    alignContent: "stretch",
    paddingBottom: 100,
    justifyContent: "flex-end",
  },
  button: {
    borderRadius: 5,
    width: "95%",
    borderStyle: "solid",
    borderWidth: 1,
    flex: 1,
    flexDirection: "column",
    maxHeight: 70,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "2%",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
  },
  link: {
    width: "100%",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
});
