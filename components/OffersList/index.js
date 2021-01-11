import React from "react";
import { View, Text } from "react-native";
import { useData } from "../../contexts/data";
import { Container, List } from "./styles";

const OffersList = () => {
  const { offers } = useData();
  const OffersItem = ({ item }) => (
    <Container bgColor={item.color}>
      <Text style={{ fontWeight: "bold", color: "#1b1b1b", fontSize: 20 }}>
        {item.text}
      </Text>
    </Container>
  );
  return (
    <List showsHorizontalScrollIndicator={false}>
      {offers.map((item) => (
        <OffersItem key={item.key} item={item} />
      ))}
    </List>
  );
};

export default OffersList;
