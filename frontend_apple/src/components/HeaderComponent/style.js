import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  padding: 10px 60px;
  margin: auto;
  height: 80px;
  background-attachment: fixed;
  background-color: #f2f3f4;
  align-item: center;
  gap: 13px;
  flex-wrap: nowrap;
`;
export const WrapperTextHeader = styled.span`
  font-style: 18px;
  color: #fff;
  font-family: bold;
  text-align: left;
`;
export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 40px;
  font-size: 12px;
`;

export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
`;
export const WrapperTextIconHeader = styled.div`
  font-size: 20px;
`;
