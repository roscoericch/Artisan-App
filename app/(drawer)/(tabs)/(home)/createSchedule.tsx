import { StyleSheet, Text, View } from "react-native";
import { backgroundColor } from "styled-system";
import { BlurView } from "expo-blur";

const createSchedule = () => {
  return (
    <View style={styles.container}>
      <BlurView style={styles.blurcontainer} intensity={2}>
        <Text>createSchedule</Text>
      </BlurView>
    </View>
  );
};

export default createSchedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurcontainer: {
    backgroundColor: "rgba(255, 255, 255, 0.80)",
    backfaceVisibility: "visible",
    flex: 1,
  },
});
