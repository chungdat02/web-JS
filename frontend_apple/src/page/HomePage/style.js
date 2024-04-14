import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const WrapperTypeProduct = styled.div`
  display: flex;
  align-item: center;
  gap: 24px;
  padding: 15px 0px;
  height: 40px;
  width: 100%;
  font-size: 20px;
  justify-content: flex-start;
  border-bottom: 1px solid red;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background: rgb(13, 92, 182);
    span {
      color: #fff;
    }
  }
  width: 100%;
  text-align: center;
`;
export const WrapperProducts = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
const WrapperTextTypeProduct = styled.span`
WrapperTypeProduct`;
export { WrapperTypeProduct, WrapperTextTypeProduct };
