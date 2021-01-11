import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.ScrollView`
  flex: 1;
  background: #f4f4f4;
`;

export const Address = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  background: #fff;
`;
export const PaymentButton = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 10px 10px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: ${colors.second_red};
  border-radius: 5px;
`;
export const PaymentText = styled.Text`
  color: #fff;
  font-family: roboto_700;
  font-size: 16px;
`;
export const PartnerName = styled.Text`
  color: #1b1b1b;
  font-family: roboto_700;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 15px;
`;
export const Items = styled.View`
  padding: 0 15px;
`;
export const ItemInfo = styled.View`
  height: 60px;
  justify-content: space-around;
`;
export const RemoveItem = styled.View`
  background: ${colors.second_red};
  border-radius: 200px;
  padding: 5px;
  margin-right: -50px;
`;
export const BuyMore = styled.Text`
  color: ${colors.second_red};
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
`;
export const PriceInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
`;
export const Wrapper = styled.View`
  background: #fff;
  margin-top: 10px;
`;
