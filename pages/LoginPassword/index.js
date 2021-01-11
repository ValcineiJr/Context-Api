import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import PasswordInput from "../../components/PasswordInput";
import { Container, Name, Avatar, Email } from "./styles";
import {
  useRoute,
  useNavigation,
  StackActions,
} from "@react-navigation/native";
import { singUp } from "../../services/auth";
import { useAuth } from "../../contexts/auth";

const LoginPassword = () => {
  const { setSuccess, user, success, setSigned, storageData } = useAuth();
  const navigation = useNavigation();
  const [password, setPassword] = useState("");

  const [securityTextEntry, setSecurityTextEntry] = useState(true);
  useEffect(() => {
    if (success) {
      setSuccess(false);
    }
  }, [success]);

  const handleSignUp = async () => {
    const response = await singUp(user.email, user.avatar, user.name, password);
    //response.msg && response.user
    if (response.msg === "Sucesso") {
      setSigned(true);
      storageData();
      // navigation.dispatch(StackActions.replace("Navigation"));
    }
  };

  return (
    <Container>
      <Text>Cadastrando como</Text>
      <Name>{user.name}</Name>
      <Name>{user.email}</Name>
      <Avatar source={{ uri: user.avatar }} />
      <PasswordInput
        value={password}
        onChangeText={setPassword}
        securityEntry={securityTextEntry}
        setSecurityEntry={() => setSecurityTextEntry(!securityTextEntry)}
        placeholder="Crie uma senha"
        style={{ borderColor: "#ccc", borderWidth: 1 }}
      />
      <Button onPress={handleSignUp} title="Cadastrar" />
    </Container>
  );
};

export default LoginPassword;
