import React, { useState } from "react";
import {
  TouchableNativeFeedback,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from "react-native";
import NumericInput from "react-native-numeric-input";
import { Container, AddCart } from "./styles";
import { useCart } from "../../contexts/cart";
import { useNavigation } from "@react-navigation/native";

const ItemDetails = () => {
  const { setOpenCart, setCart, cart } = useCart();
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    navigation.goBack();
    setOpenCart(true);

    setCart([
      ...cart,
      {
        key: "1",
        name: "Bife com fritas",
        price: 27.0,
        quantity,
        total: quantity * 27.0,
      },
    ]);
  };

  return (
    <Container>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://jvonline.com.br/img/noticias/noticias_bf680b9ccda1740bd911c0c4bf3b4a7b.jpg",
        }}
      />
      <View style={styles.header}>
        <Text style={styles.title}>Bife com fritas</Text>
        <Text style={styles.price}>R$: 27,00</Text>
      </View>
      <Text style={styles.partner}>Pensão da Tia Mary</Text>
      <View style={styles.notes}>
        <Text style={styles.noteText}>Alguma Observação ?</Text>
        <TextInput
          placeholder="Ex: tirar cebola, colocar maionese"
          style={styles.input}
        />
      </View>
      <View style={styles.addCartContainer}>
        <NumericInput
          minValue={1}
          rounded
          value={quantity}
          initValue={1}
          iconStyle={{ color: "#f71826" }}
          rightButtonBackgroundColor="#f4f4f4"
          onChange={(value) => setQuantity(value)}
        />
        <TouchableNativeFeedback onPress={addToCart}>
          <AddCart>
            <Text style={styles.buyText}>Adicionar</Text>
            <Text style={styles.buyText}>R$: 27,00</Text>
          </AddCart>
        </TouchableNativeFeedback>
      </View>
    </Container>
  );
};

export default ItemDetails;
const styles = StyleSheet.create({
  addCartContainer: {
    marginTop: "auto",
    height: 40,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  buyText: { color: "#fff" },
  header: {
    height: 70,
    padding: 10,
    justifyContent: "space-around",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  title: { color: "#2f2f2f", fontWeight: "bold", fontSize: 18 },
  price: { color: "#666", fontWeight: "bold", fontSize: 16 },
  partner: { color: "#f71826", textAlign: "center", marginVertical: 10 },
  notes: {
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    height: 80,
    justifyContent: "space-around",
  },
  image: { height: 180 },
  noteText: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingLeft: 16,
  },
});
