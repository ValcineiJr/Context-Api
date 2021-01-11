import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  z-index: 9;
  background: ${colors.second_red};
  position: absolute;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  z-index: 9;
  background: ${colors.second_red};
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  color: #fff;
  font-family: roboto_700;
`;
