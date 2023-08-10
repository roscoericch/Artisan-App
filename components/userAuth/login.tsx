import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, StyleSheet, Text, View, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { useController } from "react-hook-form";
import Colors from "../../constants/Colors";

export default function Login() {
  const { replace } = useRouter();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input}></TextInput>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <Link href={"(tabs)"}>
          <Text style={styles.buttonText}>Login</Text>
        </Link>
      </Pressable>
      {/* <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFF",
    flex: 1,
    gap: 12,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    color: "#000",
    paddingVertical: 2,
  },
  input: {
    borderRadius: 2,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
    height: 50,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: Colors.headerbg,
    borderRadius: 5,
    alignSelf: "flex-end",
    paddingVertical: 15,
    paddingHorizontal: 60,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
