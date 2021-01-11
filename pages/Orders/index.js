import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { Container } from './styles';
const Tab = createMaterialTopTabNavigator();
import InProgress from "./pages/InProgress";
import Previous from "./pages/Previous";
import CartIndicator from "../../components/CartIndicator";

const Orders = () => {
  return (
    <>
      <View style={{ backgroundColor: "#fff", paddingVertical: 5 }}>
        <Text
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: 11,
            color: "#2f2f2f",
            fontWeight: "bold",
          }}
        >
          PEDIDOS
        </Text>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#F71829",
          inactiveTintColor: "#cecece",
          indicatorStyle: { backgroundColor: "#F71829" },
        }}
      >
        <Tab.Screen name="Anteriores" component={Previous} />
        <Tab.Screen name="Em Andamento" component={InProgress} />
      </Tab.Navigator>
    </>
  );
};

export default Orders;
