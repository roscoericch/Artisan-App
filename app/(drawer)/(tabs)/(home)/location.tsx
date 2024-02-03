import { Modal } from "react-native";
import { ListItem } from "@rneui/base";
import state from "../../../../constants/Location";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../../../constants/Colors";
const location = () => {
  return (
    <ScrollView style={{}}>
      {/* <Text>location</Text> */}
      {state.map((e, i) => (
        <ListItem
          shouldRasterizeIOS
          collapsable
          containerStyle={{
            display: "flex",
            // gap: 10,
            paddingVertical: 15,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#EEE",
            width: "80%",
            alignSelf: "center",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: Colors.headerbg,
            borderStyle: "solid",
            // height: "50%",
          }}
        >
          {/* <ListItem.CheckBox
            size={20}
            id={`${i}`}
            checked={false}
            style={{ backgroundColor: "#EEE" }}
          ></ListItem.CheckBox> */}
          <ListItem.Title
            style={{ fontSize: 20, textAlign: "center" }}
            selectable
            selectionColor={Colors.headerbg}
          >
            {e.label}
          </ListItem.Title>
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default location;
