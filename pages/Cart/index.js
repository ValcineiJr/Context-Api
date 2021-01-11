import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  PaymentButton,
  PaymentText,
  Address,
  PartnerName,
  Items,
  ItemInfo,
  BuyMore,
  RemoveItem,
  PriceInfo,
  Wrapper,
} from "./styles";
import { useCart } from "../../contexts/cart";
import colors from "../../styles/colors";

const Cart = () => {
  const { cart, total } = useCart();
  return (
    <>
      <Container>
        <Address>
          <View>
            <Text>Entregar em R.Birigui, 76</Text>
            <Text>R.Birigui, 76</Text>
          </View>
          <Feather name="chevron-right" color={colors.second_red} size={20} />
        </Address>
        <PartnerName>Chopperia Braunn</PartnerName>
        <Wrapper>
          <Items>
            {cart.map((item, i) => {
              const newPrice = item.price
                .toFixed(2)
                .toString()
                .replace(".", ",");
              return (
                <View style={styles.itemContainer}>
                  <RemoveItem>
                    <Feather name="x" size={15} color="#fff" />
                  </RemoveItem>
                  <ItemInfo>
                    <Text style={styles.title} key={i}>
                      {item.name}
                    </Text>
                    <Text style={styles.subTitle}>R$: {newPrice}</Text>
                  </ItemInfo>
                  <ItemInfo>
                    <Text style={styles.title}>Quantidade</Text>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                  </ItemInfo>
                </View>
              );
            })}
          </Items>
        </Wrapper>
        <BuyMore>Comprar mais</BuyMore>
        <Wrapper>
          <PriceInfo>
            <Text style={styles.priceOne}>Subtotal</Text>
            <Text style={styles.priceTwo}>
              R$: {total.toString().replace(".", ",")}
            </Text>
          </PriceInfo>
          <PriceInfo>
            <Text style={styles.priceOne}>Taxa de entrega</Text>
            <Text style={styles.priceTwo}>R$: 5,00</Text>
          </PriceInfo>
          <PriceInfo>
            <Text style={styles.priceTotal}>Total</Text>
            <Text style={styles.priceTotal}>
              R$: {(Number(total) + 5).toFixed(2).toString().replace(".", ",")}
            </Text>
          </PriceInfo>
        </Wrapper>
      </Container>
      <PaymentButton>
        <PaymentText>Escolher método de pagamento</PaymentText>
      </PaymentButton>
    </>
  );
};

export default Cart;
const styles = StyleSheet.create({
  priceOne: { color: "#888", fontSize: 16 },
  priceTwo: { color: "#888", fontSize: 14 },
  priceTotal: {
    color: "#1b1b1b",
    fontSize: 18,
    fontFamily: "roboto_500",
    marginTop: 15,
  },
  title: { color: colors.gray, fontSize: 16 },
  subTitle: { fontFamily: "roboto_700" },
  quantity: {
    color: colors.second_red,
    textAlign: "center",
    fontFamily: "roboto_700",
  },
  itemContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
});
