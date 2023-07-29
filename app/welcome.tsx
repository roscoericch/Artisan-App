import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

export default function Login() {
  const { push } = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={{ ...styles.button, backgroundColor: "#FFF" }}
        onPress={() => {
          push("artisan");
        }}
      >
        <Text style={{ ...styles.buttonText, color: Colors.headerbg }}>
          Access as Artisan
        </Text>
      </Pressable>
      <Pressable
        style={{
          ...styles.button,
          backgroundColor: Colors.headerbg,
          borderColor: "#FFF",
        }}
        onPress={() => {
          push("client");
        }}
      >
        <Text style={{ ...styles.buttonText, color: "#FFF" }}>
          Access as Client
        </Text>
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
});
