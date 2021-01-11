import React, { createContext, useState, useEffect, useContext } from "react";

import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import AsyncStorage from "@react-native-community/async-storage";

const AuthContext = createContext({
  signed: Boolean,
  success: Boolean,
  user: Object,
  setUser: () => {},
  signUpGoogle: () => {},
  signOut: () => {},
  signUpFacebook: () => {},
  setSuccess: () => {},
  setSigned: () => {},
  storageData: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signed, setSigned] = useState(false);
  const [success, setSuccess] = useState(false);

  const loadStorageData = async () => {
    const storageUser = await AsyncStorage.getItem("@user");
    const storageToken = await AsyncStorage.getItem("@token");

    if (storageToken && storageUser) {
      setUser(JSON.parse(storageUser));
      setSigned(true);
    }
  };

  const storageData = async () => {
    await AsyncStorage.setItem("@token", "@123");
    await AsyncStorage.setItem("@user", JSON.stringify(user));
  };

  useEffect(() => {
    loadStorageData();
  }, []);

  const signUpGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "370738956572-b33539ujk9mabrc5232b0r69pcc46hsq.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        setUser({
          email: result.user.email,
          avatar: result.user.photoUrl,
          name: result.user.name,
        });
        setSuccess(true);
      } else {
        alert("erro 1");
        return { cancelled: true };
      }
    } catch (e) {
      alert("erro 2");
      return { error: true };
    }
  };

  const signUpFacebook = async () => {
    try {
      await Facebook.initializeAsync("523394391854280");
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
        );
        // console.log((await response.json()).name);
        const data = await response.json();
        setUser({
          email: data.email,
          avatar: data.picture.data.url,
          name: data.name,
        });
        setSuccess(true);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  const signOut = () => {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };
  return (
    <AuthContext.Provider
      value={{
        signed,
        user,
        signUpGoogle,
        signUpFacebook,
        signOut,
        success,
        setUser,
        setSuccess,
        setSigned,
        storageData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
