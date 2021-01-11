import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-family: roboto_700;
`;
export const Button = styled.Text`
  font-size: 14px;
  color: ${colors.red};
  font-family: roboto_500;
`;
