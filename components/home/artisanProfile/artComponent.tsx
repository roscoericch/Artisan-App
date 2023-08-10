import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

const ArtComponent = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../../assets/images/artImage.jpg")}
        />
      </View>
      <View style={styles.content}>
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
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 30,
  },
  image: {
    height: 151,
    width: 170,
    borderRadius: 2,
  },
  content: {
    paddingHorizontal: "5%",
    paddingTop: "5%",
    paddingBottom: "10%",
    backgroundColor: "#FFF",
    borderRadius: 2,
  },
});

export default ArtComponent;
