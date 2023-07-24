import { StyleSheet, Text, View, Platform, Pressable } from "react-native";
import { Picker, PickerIOS } from "@react-native-picker/picker";
import { useState, useRef } from "react";
import Colors from "../../../constants/Colors";
import State from "../../../constants/Location";
import Artisan from "../../../constants/Artisans";

export default function Home() {
  const [location, setLocation] = useState("");
  const locationPicker = useRef(null);
  const artisanPicker = useRef(null);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainetr}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello Daniel</Text>
          {Platform.OS === "ios" ? (
            <View style={styles.pickerGroup}>
              <View>
                <PickerIOS>
                  {Artisan.map((e, i) => (
                    <PickerIOS.Item
                      key={`${i}artisan`}
                      value={e.value}
                      label={e.label}
                    />
                  ))}
                </PickerIOS>
              </View>
              <View>
                <PickerIOS>
                  {State.map((e, i) => (
                    <PickerIOS.Item
                      key={`${i}location`}
                      value={e.value}
                      label={e.label}
                    />
                  ))}
                </PickerIOS>
              </View>
            </View>
          ) : (
            <View style={styles.pickerGroup}>
              <Pressable
                onPress={() => {
                  if (artisanPicker.current) {
                    artisanPicker.current.focus();
                  }
                }}
              >
                <Picker ref={locationPicker} style={styles.picker}>
                  {State.map((e, i) => (
                    <Picker.Item
                      key={`${i}location`}
                      value={e.value}
                      label={e.label}
                      style={{
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#D9D9D9",
                      }}
                    />
                  ))}
                </Picker>
              </Pressable>
              <View
                style={{
                  width: 0.5,
                  height: "100%",
                  backgroundColor: Colors.headerbg,
                }}
              ></View>
              <Pressable
                onPress={() => {
                  if (locationPicker.current) {
                    locationPicker.current.focus();
                  }
                }}
              >
                <Picker ref={artisanPicker} style={styles.picker}>
                  {Artisan.map((e, i) => (
                    <Picker.Item
                      key={`${i}artisan`}
                      value={e.value}
                      label={e.label}
                      style={{
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#D9D9D9",
                      }}
                    />
                  ))}
                </Picker>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerContainetr: {
    backgroundColor: Colors.headerbg,
    height: "20%",
    paddingVertical: "10%",
  },
  header: {
    width: "90%",
    flex: 1,
    marginHorizontal: "5%",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-end",
    justifyContent: "flex-end",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFF",
    paddingBottom: "3%",
  },
  pickerGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: "-80%",
    // marginHorizontal: "2%",
    width: "99%",
    backgroundColor: "#FFF",
    paddingHorizontal: "5%",
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.headerbg,
  },
  picker: {
    width: 140,
    borderBottomRightRadius: 5,
    borderBottomEndRadius: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.headerbg,
  },
});
