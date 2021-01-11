import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import Modal from "react-native-modal";
import { FontAwesome5 } from "@expo/vector-icons";

import { Container, Button, OtherButton } from "./styles";

const LoginModal = ({ isVisible, onBackdropPress, facebookLogin }) => {
  return (
    <Modal
      style={{ margin: 0, flex: 1, justifyContent: "flex-end" }}
      onBackdropPress={onBackdropPress}
      isVisible={isVisible}
    >
      <Container>
        <Text>Como deseja continuar ?</Text>
        <TouchableNativeFeedback onPress={facebookLogin}>
          <Button style={styles.faceButton}>
            <FontAwesome5 name="facebook-square" style={styles.icon} />
            <Text style={styles.facebookText}>Facebook</Text>
          </Button>
        </TouchableNativeFeedback>
        <View style={styles.buttonGroup}>
          <OtherButton>
            <Text style={styles.buttonText}>Celular</Text>
          </OtherButton>
          <OtherButton>
            <Text style={styles.buttonText}>E-mail</Text>
          </OtherButton>
        </View>
      </Container>
    </Modal>
  );
};

export default LoginModal;

const styles = StyleSheet.create({
  faceButton: { backgroundColor: "#3b5998" },
  facebookText: { color: "#fff", fontSize: 12 },
  icon: {
    position: "absolute",
    left: 10,
    fontSize: 22,
    color: "#fff",
  },
  buttonGroup: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    width: "90%",
  },
  buttonText: { color: "#3c3c3c", fontSize: 12, fontWeight: "bold" },
});
