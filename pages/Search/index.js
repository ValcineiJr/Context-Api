import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/FontAwesome5";
import { useData } from "../../contexts/data";
import { Container, InputBox, Input, Categories } from "./styles";
import CartIndicator from "../../components/CartIndicator";

const Search = () => {
  const navigation = useNavigation();
  const { categoriesList } = useData();

  const windowWidth = Dimensions.get("window").width;
  return (
    <Container>
      <CartIndicator />
      <InputBox>
        <Icon name="search" color="#F71829" size={30} />
        <Input placeholder="Item ou loja" placeholderTextColor="#666" />
      </InputBox>

      <Categories>
        <Text style={styles.title}>Categorias</Text>
        <View
          style={{
            width: windowWidth,
            padding: 20,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {categoriesList.map((item) => (
            <View
              key={item.key}
              style={[styles.item, { backgroundColor: item.cor }]}
            >
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
                {item.name}
              </Text>
            </View>
          ))}
        </View>
      </Categories>
    </Container>
  );
};

export default Search;
const styles = StyleSheet.create({
  categories: { backgroundColor: "red", width: "100%", padding: 20 },
  title: {
    textAlign: "left",
    padding: 20,
    marginLeft: -5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#2f2f2f",
    paddingBottom: 0,
    marginLeft: 10,
  },
  item: {
    width: 165,
    elevation: 2,
    backgroundColor: "blue",
    height: 80,
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
