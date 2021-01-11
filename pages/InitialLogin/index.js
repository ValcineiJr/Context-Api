import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
} from "react-native";
import {} from "@expo/vector-icons";
import * as Facebook from "expo-facebook";
import { Container, Button, Icon } from "./styles";
import Modal from "../../modals/LoginModal";
import { AppLoading } from "expo";
import { useNavigation, StackActions } from "@react-navigation/native";
import { useAuth } from "../../contexts/auth";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

const InitialLogin = () => {
  let [fontsLoaded] = useFonts({
    roboto_400: Roboto_400Regular,
    roboto_500: Roboto_500Medium,
    roboto_700: Roboto_700Bold,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const { signUpGoogle, signUpFacebook, user, setUser, success } = useAuth();
  const navigation = useNavigation();

  async function facebookSignUp() {
    setModalVisible(false);
    signUpFacebook();
  }

  async function googleSignUp() {
    signUpGoogle();
  }

  useEffect(() => {
    if (success) {
      navigation.navigate("LoginPassword");
    }
  }, [success]);

  const goToInitial = () => {
    navigation.dispatch(StackActions.replace("Navigation"));
  };

  if (!user || !fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Container>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        isVisible={modalVisible}
        facebookLogin={facebookSignUp}
      />
      <Image
        resizeMode="contain"
        style={{ width: 100, height: 80 }}
        source={{
          uri:
            "https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-8.png",
        }}
      />
      <View style={{ width: "90%", alignItems: "center" }}>
        <Text style={styles.title}>Falta pouco para matar sua fome!</Text>
        <Text style={styles.subTitle}>Como deseja continuar?</Text>
        <TouchableNativeFeedback onPress={googleSignUp}>
          <Button style={styles.googleButton}>
            <View style={styles.iconBorder}>
              <Icon source={require("../../../assets/google-icon.png")} />
            </View>
            <Text style={styles.googleText}>Continuar com o Google</Text>
          </Button>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
          <Button style={styles.otherButton}>
            <Text style={styles.otherText}>Outras opções</Text>
          </Button>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={goToInitial}>
          <Text style={styles.guest}>Continuar como convidado</Text>
        </TouchableNativeFeedback>
      </View>
    </Container>
  );
};

export default InitialLogin;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "roboto_400",
    color: "#3c3c3c",
    fontWeight: "bold",
    width: 210,
    textAlign: "center",
  },
  subTitle: {
    color: "#6d6d6d",
    fontSize: 16,
    marginVertical: 20,
  },
  googleButton: {
    backgroundColor: "#4286F5",
  },
  googleText: {
    color: "#fff",
    fontWeight: "bold",
  },
  iconBorder: {
    backgroundColor: "#fff",
    height: 40,
    width: 40,
    position: "absolute",
    left: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  otherButton: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: 20,
  },
  otherText: { color: "#2f2f2f", fontWeight: "bold" },
  guest: { marginVertical: 10, fontSize: 16, color: "#828282" },
});
