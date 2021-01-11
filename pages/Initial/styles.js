import styled from "styled-components/native";
import Constants from "expo-constants";
import { Platform } from "react-native";
import colors from "../../styles/colors";

const StatusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding-top: ${StatusBarHeight + "px"};
`;
export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;
export const Header = styled.View`
  height: 70px;
  justify-content: space-evenly;
  padding-left: 8px;
  background: #f4f4f4;
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
`;
export const Address = styled.Text`
  font-size: 18px;
`;
export const Welcome = styled.Text`
  font-size: 18px;
  font-family: roboto_400;
`;
export const Name = styled.Text`
  font-size: 18px;
  color: ${colors.red};
  font-family: roboto_700;
`;
