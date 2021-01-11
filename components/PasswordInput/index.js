import React from "react";
import { View, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import { Feather } from "@expo/vector-icons";

// import { Container } from './styles';

const PasswordInput = ({
  value,
  onChangeText,
  securityEntry,
  setSecurityEntry,
  placeholder,
  style,
}) => {
  return (
    <View
      style={{
        height: 50,
        position: "relative",
        marginBottom: 8,
        width: "100%",
      }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={securityEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={[styles.input, style]}
      />

      <TouchableHighlight
        onPress={setSecurityEntry}
        style={{ position: "absolute", right: 15, top: 19 }}
      >
        <Feather
          name={securityEntry ? "eye-off" : "eye"}
          size={20}
          color="#444"
        />
      </TouchableHighlight>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: "#fafafa",
    fontSize: 12,
    padding: 8,
    width: "100%",
  },
});
