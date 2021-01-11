import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { Container, Title, Button } from "./styles";
import { useCart } from "../../contexts/cart";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartIndicator = () => {
  const { openCart, cart, setTotal } = useCart();
  const navigation = useNavigation();

  if (openCart) {
    const total = cart
      .map((item) => item.total)
      .reduce((total, i) => total + i)
      .toFixed(2);
    return (
      <Button
        onPress={() => {
          navigation.navigate("Cart");
          setTotal(total);
        }}
      >
        <Container>
          <Feather name="shopping-cart" size={15} color="#fff" />
          <Title>Seu carrinho</Title>
          <Title>R$: {total.toString().replace(".", ",")}</Title>
        </Container>
      </Button>
    );
  }

  return null;
};

export default CartIndicator;
