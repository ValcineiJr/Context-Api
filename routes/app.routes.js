import React from "react";
//Pages
import Home from "../pages/Home";
import ItemDetails from "../pages/ItemDetails";
import Cart from "../pages/Cart";

import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

const Approutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      options={{ headerShown: false }}
      component={Home}
    />
    <AppStack.Screen
      name="ItemDetails"
      options={{ title: "Detalhes do item" }}
      component={ItemDetails}
    />
    <AppStack.Screen
      name="Cart"
      options={{ title: "Carrinho" }}
      component={Cart}
    />
  </AppStack.Navigator>
);

export default Approutes;
