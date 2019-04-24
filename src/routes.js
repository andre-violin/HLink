import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";

import Home from "./pages/home";
import Hyperlink from "./pages/hyperlink";
import CadastroLinks from "./pages/CadastroLinks";

const defaultStyle = {
  headerStyle: {
    backgroundColor: "#444"
  },
  headerTintColor: "#FFF"
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    CadastroLinks: CadastroLinks
  },
  {
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const StackNavigator = createStackNavigator({
  // TabNavigator: { screen: TabNavigator },
  Home: {
    screen: Home,
    navigationOptions: () => defaultStyle
  },
  Hyperlink,
  CadastroLinks: {
    screen: CadastroLinks,
    navigationOptions: () => defaultStyle
  }
});

export default createAppContainer(StackNavigator);
