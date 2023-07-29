import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

const ArtComponent = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../../assets/images/artImage.jpg")} />
      </View>
      <View>
        <Text>Flat Top Fade</Text>
        <Text>#1,500</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    shadowColor: "#FFF",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 4, height: 4 },
  },
});

export default ArtComponent;
