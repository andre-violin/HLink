import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./pages/home";
import Hyperlink from "./pages/hyperlink";
import CadastroLinks from "./pages/CadastroLinks";

const defaultStyle = title => {
  return {
    title,
    headerStyle: {
      backgroundColor: "#444"
    },
    headerTintColor: "#FFF"
  };
};

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => defaultStyle("Home")
  },
  Hyperlink: { screen: Hyperlink }
});

const CadastroLinksStack = createStackNavigator({
  CadastroLinks: {
    screen: CadastroLinks,
    navigationOptions: () => defaultStyle("Cadastro de Links")
  }
});

const TabStackNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    CadastroLinks: {
      screen: CadastroLinksStack,
      navigationOptions: () => ({
        title: "Adicionar Links"
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home${focused ? "" : "-outline"}`;
          // iconName = `ios-home`;
        } else if (routeName === "CadastroLinks") {
          iconName = `link${focused ? "-off" : ""}`;
        }
        return <Icon name={iconName} size={18} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#5C87A7",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabStackNavigator);
