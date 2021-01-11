import React from "react";
import { View, Text } from "react-native";
import CartIndicator from "../../../../components/CartIndicator";

// import { Container } from './styles';

const Previous = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CartIndicator />
      <Text style={{ fontSize: 30, color: "#F71829" }}>
        Você ainda não pediu
      </Text>
    </View>
  );
};

export default Previous;
