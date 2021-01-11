import React from "react";
import { View, TouchableNativeFeedback, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";
import { Container, Header, Body, FirstOptions, SecondOptions } from "./styles";
import CartIndicator from "../../components/CartIndicator";

const Perfil = () => {
  const FirstOptionsList = [
    {
      key: "1",
      icon: "bell",
      title: "Notificações",
      content: "Minha central de notificações",
    },
    {
      key: "2",
      icon: "ticket-alt",
      title: "Cupons",
      content: "Meus cupons de desconto",
    },
    {
      key: "3",
      icon: "star",
      title: "Favoritos",
      content: "Meus locais favoritos",
    },
    {
      key: "4",
      icon: "map-marker-alt",
      title: "Endereços",
      content: "Meus endereços de entrega",
    },
    { key: "5", icon: "donate", title: "Doações", content: "Minhas doações" },
  ];
  const SecondOptionsList = [
    { key: "1", title: "Ajuda", icon: "question-circle" },
    { key: "2", title: "Configurações", icon: "cog" },
    { key: "3", title: "Sugerir restaurantes", icon: "utensils" },
    { key: "4", title: "Seja parceiro", icon: "handshake" },
  ];
  return (
    <Container>
      <CartIndicator />
      <Header>
        <View style={styles.header}>
          <Text style={styles.title}>Falta pouco para matar sua fome!</Text>
        </View>
        <TouchableNativeFeedback>
          <View style={styles.button}>
            <Text style={{ color: "#2f2f2f", fontWeight: "bold" }}>
              Entrar ou cadastrar
            </Text>
          </View>
        </TouchableNativeFeedback>
      </Header>
      <Body>
        {FirstOptionsList.map((item) => (
          <FirstOptions key={item.key}>
            <Icon name={item.icon} color="#888" size={22} />
            <View style={styles.middle}>
              <Text style={styles.middleTitle}>{item.title}</Text>
              <Text style={styles.middleContent}>{item.content}</Text>
            </View>
            <Icon
              style={{ marginLeft: "auto" }}
              color="#888"
              name="chevron-right"
            />
          </FirstOptions>
        ))}
        <View style={{ height: 40 }} />
        {SecondOptionsList.map((item) => (
          <SecondOptions key={item.key}>
            <Icon name={item.icon} size={22} color="#888" />
            <Text style={{ marginLeft: 20, fontSize: 16, color: "#888" }}>
              {item.title}
            </Text>
            <Icon
              style={{ marginLeft: "auto" }}
              color="#888"
              name="chevron-right"
            />
          </SecondOptions>
        ))}
      </Body>
    </Container>
  );
};

export default Perfil;
const styles = StyleSheet.create({
  header: { flex: 1, justifyContent: "center" },
  title: { fontSize: 18 },
  button: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  middle: {
    marginLeft: 20,
  },
  middleTitle: {
    fontSize: 20,
  },
  middleContent: {
    color: "#888",
  },
});
