import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
`;
export const Header = styled.View`
  height: 200px;
  border-bottom-color: #ddd;
  align-items: center;
  border-bottom-width: 1px;
`;
export const Body = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 15 },
})``;
export const FirstOptions = styled.View`
  height: 80px;
  flex-direction: row;
  padding: 10px 20px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;
export const SecondOptions = styled.View`
  height: 80px;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;
