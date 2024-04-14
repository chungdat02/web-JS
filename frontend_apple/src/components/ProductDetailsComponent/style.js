import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
  height: 100px;
  width: 100px;
`;
export const WrapperStyleColImage = styled(Col)`
  flex-basic: unset;
  display: flex;
  width: 110px;
`;
export const WrapperStyleNameProduct = styled.h1`
  font-family: bold;
  font-size: 30px;
  color: white;
  text-align: left;
`;

export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-weight: 24px;
  color: rgb(120, 120, 120);
`;
export const WrapperPriceProduct = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 4px;
`;
export const WrapperPriceTextProduct = styled.h1`
  font-size: 25px;
  line-height: 40px;
  color: white;
  margin-right: 8px;
  padding: 10px;
  font-weight: 500;
`;
export const WrapperAddressProduct = styled.div`
  span.ship {
    padding-right: 5px;
    color: white;
  }
  span.change-address {
    font-size: 15px;
    padding-left: 5px;
    color: orange;
    font-weight: 500;
  }
  span.address {
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: white;
    font-weight: 500;
  }
`;
export const WrapperQualityProduct = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  border-radius: 2px;
  color: white;
  width: 120px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const WrapperInputNumber = styled(InputNumber)`
  &.ant-input-number.ant-input-number-sm {
    width: 60px;
    border-top: none;
    border-bottom: none;
    &.ant-input-number-handler-wrap {
      display: none !important;
    }
  }
`;
