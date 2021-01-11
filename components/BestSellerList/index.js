import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useData } from "../../contexts/data";
import { Container, List } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../../contexts/cart";

const BestSellerList = () => {
  const { moreSeller } = useData();
  const { cart } = useCart();
  const navigation = useNavigation();

  const BestSellerItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ItemDetails");
      }}
    >
      <Container source={{ uri: item.image }} />
    </TouchableOpacity>
  );

  return (
    <List>
      {moreSeller.map((item) => (
        <BestSellerItem key={item.key} item={item} />
      ))}
    </List>
  );
};

export default BestSellerList;
