import styled from "styled-components/native";

export const Container = styled.Image`
  width: 160px;
  height: 100px;
  margin: 10px;
`;
export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0 24px;
`;
