import { ListItem } from "@rneui/base";
import Artisan from "../../../constants/Artisans";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../../../constants/Colors";
const artisan = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#EEE" }}>
      {/* <Text>location</Text> */}
      {Artisan.map((e, i) => (
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

export default artisan;
