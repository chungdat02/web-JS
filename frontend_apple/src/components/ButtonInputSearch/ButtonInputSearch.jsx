import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    bordered,
    styleTextButton,
    backgroundColorInput = "#fff",
    backgroundColorButton = "#fff",
    textButton = "black",
    colorButton = "black",
  } = props;
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{
          backgroundColor: backgroundColorInput,
          border: bordered ? "1px solid black" : null,
        }}
      />
      <ButtonComponent
        bordered={bordered}
        size={size}
        color="black"
        styleButton={{
          backgroundColor: backgroundColorButton,
          color: "#000000",
          border: bordered ? "1px solid black" : "none",
        }}
        styleTextButton={{ color: colorButton }}
        icon={
          <SearchOutlined color={colorButton} style={{ color: "#000000" }} />
        }
        textButton={textButton}
        style={styleTextButton}
      >
        <span> {textButton}</span>
      </ButtonComponent>
    </div>
  );
};

export default ButtonInputSearch;
