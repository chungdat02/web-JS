import React from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";

const TypeProductPage = () => {
  const onChange = {};
  return (
    <div style={{ width: "100%", background: "#efefef" }}>
      <div style={{ width: "1270px", margin: "0 auto" }}>
        <Row
          style={{
            flexWrap: "nowrap",
            paddingTop: "10px",
          }}
        >
          <Col span={5}>
            <WrapperNavbar>
              <NavbarComponent></NavbarComponent>
            </WrapperNavbar>
          </Col>
          {/* ----------------------------------- */}
          <Col span={19}>
            <WrapperProducts>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
              <CardComponent></CardComponent>
            </WrapperProducts>
          </Col>
        </Row>
        <Pagination
          showSizeChanger
          onShowSizeChange={onChange}
          defaultCurrent={3}
          total={100}
          style={{ textAlign: "center" }}
        />
      </div>
    </div>
  );
};

export default TypeProductPage;
