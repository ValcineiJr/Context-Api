import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  padding-top: 20px;
`;
export const InputBox = styled.View`
  height: 60px;
  width: 80%;
  background: #eee;
  margin-top: 30px;
  flex-direction: row;
  padding: 10px;
`;
export const Input = styled.TextInput`
  background: #eee;
  flex: 1;
  margin-left: 5px;
  padding-left: 8px;
  font-size: 16px;
`;
export const Categories = styled.ScrollView.attrs({
  contentContainerStyle: {},
})``;
