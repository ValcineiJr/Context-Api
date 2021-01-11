import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/FontAwesome5";
import Initial from "../Initial";
import Search from "../Search";
import Orders from "../Orders";
import Perfil from "../Perfil";
import { useAuth } from "../../contexts/auth";
import colors from "../../styles/colors";
const Tab = createBottomTabNavigator();
const Home = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const HeaderLeft = () => {
    return (
      <View
        style={{ flexDirection: "row", marginLeft: 15, alignItems: "center" }}
      >
        <Text
          style={{
            color: "#1b1b1b",
            fontWeight: "bold",
            fontSize: 16,
            fontFamily: "roboto_700",
          }}
        >
          Bem-vindo(a)
        </Text>
        <Text style={styles.headerLeft}>{user.name}</Text>
      </View>
    );
  };
  const HeaderRight = () => {
    return (
      <View
        style={{ flexDirection: "row", marginLeft: 15, alignItems: "center" }}
      >
        <Image
          source={{ uri: user.avatar }}
          style={{ width: 30, height: 30, marginRight: 20, borderRadius: 15 }}
        />
      </View>
    );
  };
  navigation.setOptions({
    headerLeft: () => <HeaderLeft />,
    headerRight: () => <HeaderRight />,
  });
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 13 },
        inactiveTintColor: "#888",
        activeTintColor: colors.gray,
      }}
    >
      <Tab.Screen
        name="Ínicio"
        options={{
          tabBarIcon: (props) => (
            <Icon
              name="home"
              color={props.focused ? colors.gray : "#888"}
              size={20}
            />
          ),
        }}
        component={Initial}
      />
      <Tab.Screen
        name="Busca"
        options={{
          tabBarIcon: (props) => (
            <Icon
              name="search"
              color={props.focused ? colors.gray : "#888"}
              size={20}
            />
          ),
        }}
        component={Search}
      />
      <Tab.Screen
        name="Pedidos"
        options={{
          tabBarIcon: (props) => (
            <Icon
              name="clipboard-list"
              color={props.focused ? colors.gray : "#888"}
              size={20}
            />
          ),
        }}
        component={Orders}
      />
      <Tab.Screen
        name="Perfil"
        options={{
          tabBarIcon: (props) => (
            <Icon
              name="user"
              color={props.focused ? colors.gray : "#888"}
              size={20}
            />
          ),
        }}
        component={Perfil}
      />
    </Tab.Navigator>
  );
};

export default Home;
const styles = StyleSheet.create({
  headerLeft: {
    color: colors.red,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "roboto_700",
  },
});
