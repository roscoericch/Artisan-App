import {
  // Import the creation function
  createDrawerNavigator,
  // Import the types
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import { EvilIcons } from "@expo/vector-icons";

import { withLayoutContext } from "expo-router";
import Colors from "../../constants/Colors";
import { View } from "react-native";

const { Navigator } = createDrawerNavigator();

// This can be used like `<Drawer />`
export const Drawer = withLayoutContext<
  DrawerNavigationOptions,
  typeof Navigator
>(Navigator);

const DrawerLayout = () => {
  return (
    <Drawer
      initialRouteName="index"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.headerbg,
          margin: 0,
          shadowColor: Colors.headerbg,
          shadowOpacity: 0,
        },
      }}
      drawerContent={(props) => <View></View>}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerTitle: "",
        }}
      />
      <Drawer.Screen name="index" />
    </Drawer>
  );
};

export default DrawerLayout;
