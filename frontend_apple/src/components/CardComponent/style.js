import { Card } from "antd";
import styled from "styled-components";

export const StyleNameProduct = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: rgb(56, 56, 61);
`;
export const WrapperCardStyle = styled(Card)`
  width: 200px;
  padding: 5px;
  & img {
    height: 250px;
    object-fit: cover;
    width: 200px;
  }
  position: relative;
`;
export const WrapperImagesStyle = styled.img`
  top: 5px;
  left: 4px;
  border-top-left-radius: 3px;
  position: absolute;
  height: 16px !important;
  width: 68px !important;
`;

export const WrapperReportText = styled.div`
  font-size: 11px;
  color: rgb(128, 128, 137);
  display: flex;
  align-items: center;
`;
export const WrapperPriceText = styled.div`
  color: rgb(255, 66, 78);
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0;
`;
export const WrapperDiscountText = styled.div`
  color: rgb(255, 66, 78);
  font-size: 12px;
  font-weight: 500;
`;
export const ButtonBuy = styled.button`
  width: 80px;
  height: 30px;
  padding: 10px;
  background: red;
`;
export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-weight: 24px;
  color: rgb(120, 120, 120);
`;
