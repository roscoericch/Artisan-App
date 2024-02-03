import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";

export default function Schedule() {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <View style={styles.container}>
      <ScrollView>
        {arr.map(() => (
          <View>
            <View style={styles.listItem}>
              <Text>Go-Neat Salon</Text>
              <Text>
                Block 36D, Flex Plaza along Caleb school, Magodo, Lagos
              </Text>
            </View>
            <View style={styles.separator}></View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    paddingVertical: "10%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    // marginVertical: 30,
    backgroundColor: Colors.headerbg,
    height: 2,
    width: "100%",
  },
  listItem: {
    width: "90%",
    paddingVertical: "5%",
    borderColor: Colors.headerbg,
    // borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "center",
  },
});
