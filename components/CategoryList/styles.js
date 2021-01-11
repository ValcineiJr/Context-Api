import styled from "styled-components/native";

export const Container = styled.View`
  width: 110px;
  height: 90px;
  background: ${(props) => props.bgColor};
  margin: 5px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0 24px;
`;
