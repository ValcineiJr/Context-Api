import React from "react";
//Pages
import InitialLogin from "../pages/InitialLogin";
import LoginPassword from "../pages/LoginPassword";
import Preload from "../pages/Preload";

import { createStackNavigator } from "@react-navigation/stack";
const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="InitialLogin"
      options={{ headerShown: false }}
      component={InitialLogin}
    />
    <AuthStack.Screen
      name="LoginPassword"
      options={{ headerShown: false }}
      component={LoginPassword}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
