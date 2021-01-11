import React from "react";
import { View, Text } from "react-native";
import CartIndicator from "../../../../components/CartIndicator";

// import { Container } from './styles';

const InProgress = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CartIndicator />
      <Text style={{ fontSize: 30, color: "#F71829" }}>Nenhum pedido</Text>
    </View>
  );
};

export default InProgress;
