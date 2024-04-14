import React from "react";
import {
  WrapperContent,
  WrapperLableText,
  WrapperTextPrice,
  WrapperTextValue,
} from "./style";
import { Checkbox, Rate } from "antd";

const NavbarComponent = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option) => {
              return (
                <Checkbox style={{ marginLeft: "0" }} value={option.value}>
                  {option.lable}
                </Checkbox>
              );
            })}
            <Checkbox value="B">C</Checkbox>
          </Checkbox.Group>
        );
      case "star":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "10px",
            }}
          >
            {options.map((option) => {
              return (
                <div style={{ display: "flex", gap: "5px" }}>
                  <Rate style={{ fontSize: "15px" }} defaultValue={option} />
                  <span
                    style={{ fontSize: "13px" }}
                  >{`Từ ${option} sao `}</span>
                </div>
              );
            })}
          </div>
        );
      case "price":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "10px",
            }}
          >
            {options.map((option) => {
              return <WrapperTextPrice>{option}</WrapperTextPrice>;
            })}
          </div>
        );
      default:
        return {};
    }
  };
  return (
    <div>
      <WrapperLableText>Danh Mục Sản Phẩm</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["Tu lanh", "TV", "May Giat"])}
        {/* checkbox */}
        {renderContent("checkbox", [
          { value: "a", lable: "A" },
          { value: "b", lable: "B" },
        ])}
      </WrapperContent>
    </div>
  );
};

export default NavbarComponent;
