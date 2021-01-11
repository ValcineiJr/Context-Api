import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import { Container, List } from "./styles";
import { useData } from "../../contexts/data";

const CategoryList = () => {
  const { categories } = useData();
  const CategoryItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.container}>
        <Container bgColor={item.color}>
          <Image
            style={styles.image}
            resizeMode="center"
            source={{ uri: item.image }}
          />
        </Container>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <List showsHorizontalScrollIndicator={false}>
      {categories.map((item) => (
        <CategoryItem key={item.key} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;
const styles = StyleSheet.create({
  container: { alignItems: "center" },
  name: { color: "#8d8d8d" },
  image: { width: 80, height: 70 },
});
