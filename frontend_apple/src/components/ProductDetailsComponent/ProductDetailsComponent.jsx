import { Col, Image, Row } from "antd";
import React from "react";
import ImageProduct1 from "../../assets/images/detail1.jpg";
import ImageProductMall2 from "../../assets/images/detail2.jpg";
import ImageProductMall3 from "../../assets/images/detail3.jpg";
import ImageProductMall4 from "../../assets/images/detail4.jpg";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ImageProductMall6 from "../../assets/images/detail6.jpg";
import {
  WrapperAddressProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import ImageProductMall7 from "../../assets/images/detail7.jpg";
import { MinusOutlined, PlusOutlined, StarFilled } from "@ant-design/icons";

const ProductDetailsComponent = () => {
  const onChange = (value) => {
    console.log(value);
  };
  return (
    <Row style={{ padding: "20px", background: "black", borderRadius: "4px" }}>
      {/* layout left */}
      <Col
        span={10}
        style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
      >
        <div style={{ borderRadius: "5px" }}>
          <Image
            style={{ borderRadius: "5px" }}
            src={ImageProduct1}
            preview={false}
            alt="image product"
          />
        </div>
        <Row
          style={{
            width: "100%",
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={ImageProductMall2}
              preview={true}
              alt="image small"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={ImageProductMall3}
              preview={true}
              alt="image small"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={ImageProductMall4}
              preview={true}
              alt="image small"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={ImageProductMall6}
              preview={true}
              alt="image small"
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={ImageProductMall7}
              preview={true}
              alt="image small"
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      {/* layout right */}
      <Col span={14} style={{ padding: "15px", paddingLeft: "20px" }}>
        <WrapperStyleNameProduct>Apple iPhone 15 Plus</WrapperStyleNameProduct>
        {/* <div className="star-icon">
          <StarFilled style={{ fontSize: "20px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "20px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "20px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "20px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "20px", color: "rgb(253,216,54)" }} />
          <WrapperStyleTextSell
            style={{ fontSize: "20px" }}
            className="text-white"
          >
            |Đã bán 1000
          </WrapperStyleTextSell>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>45.000.000 VND</WrapperPriceTextProduct>
          </WrapperPriceProduct>
        </div> */}
        <div className="star-icon">
          <div style={{ display: "flex", alignItems: "center" }}>
            <StarFilled
              style={{ fontSize: "20px", color: "rgb(253,216,54)" }}
            />
            <StarFilled
              style={{ fontSize: "20px", color: "rgb(253,216,54)" }}
            />
            <StarFilled
              style={{ fontSize: "20px", color: "rgb(253,216,54)" }}
            />
            <StarFilled
              style={{ fontSize: "20px", color: "rgb(253,216,54)" }}
            />
            <StarFilled
              style={{ fontSize: "20px", color: "rgb(253,216,54)" }}
            />
            <WrapperStyleTextSell
              style={{ fontSize: "20px" }}
              className="text-white"
            >
              | Đã bán 1000
            </WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>45.000.000 VND</WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span className="ship">Giao đến</span>
            <span className="address">Q.1,P,Bến Nghé,Hồ Chí Minh</span>
            <span className="change-address">Đổi địa chỉ</span>
          </WrapperAddressProduct>
          <div
            style={{
              margin: "10px 0 20px",
              borderTop: "1px solid gray",
              borderBottom: "1px solid white",
              padding: "10px 0",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "20px",
                marginBottom: "6px",
                paddingBottom: "10px",
              }}
            >
              Số lượng
            </div>

            <WrapperQualityProduct>
              <button style={{ border: "none", background: "transparent" }}>
                <MinusOutlined
                  style={{
                    border: "1px solid gray",
                    padding: "5px",
                    color: "#fff",
                    fontSize: "20px",
                  }}
                />
              </button>

              <WrapperInputNumber
                min={1}
                max={50}
                size="small"
                defaultValue={3}
                onChange={onChange}
              />

              <button style={{ border: "none", background: "transparent" }}>
                <PlusOutlined
                  style={{
                    border: "1px solid gray",
                    padding: "5px",
                    color: "#fff",
                    fontSize: "20px",
                  }}
                />
              </button>
            </WrapperQualityProduct>
          </div>
        </div>
        <div className="space-x-2 flex justify-center items-center pt-6">
          <ButtonComponent
            size={20}
            styleButton={{
              backgroundColor: "rgb(255,57,69)",
              height: "48px",
              border: "none",
              borderRadius: "4px",
              padding: "10px 20px",
              width: "220px",
            }}
            styleTextButton={{
              color: "white",
              fontSize: "20px",
              fontWeight: "600",
            }}
            textButton={"Chọn mua"}
          />
          <ButtonComponent
            bordered={false}
            size={20}
            styleButton={{
              fontSize: "20px",
              padding: "10px",
              backgroundColor: "white",
              height: "48px",
              border: "1px solid rgb(13,92,182)",
              radius: "10px",
              borderRadius: "4px",
              width: "220px",
            }}
            styleTextButton={{
              color: "rgb(11,92,182)",
              fontWeight: "600",
              fontSize: "20px",
            }}
            textButton={"Mua trả sau"}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
