import styled from "styled-components/native";

export const Container = styled.View`
  height: 150px;
  width: 350px;
  margin: 5px;
  background: ${(props) => props.bgColor};
  align-items: center;
  justify-content: center;
`;
export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0 24px;
`;
