import React from "react";
import { View } from "react-native";

import { Container, Title, Button } from "./styles";

const BestSellerHeader = () => {
  return (
    <Container>
      <Title>Mais vendidos</Title>
      <Button>Ver mais</Button>
    </Container>
  );
};

export default BestSellerHeader;
