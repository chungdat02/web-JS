import React from "react";
import { Badge, Col, Button, Typography } from "antd";
import {
  WrapperHeader,
  // WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperTextHeaderSmall,
} from "./style";
import {
  CaretDownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import tiki from "../../assets/images/logo_tiki.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import * as message from "../../components/Message/Message";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);

  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };

  const handleLogout = () => {
    dispatch(logout());
    message.success("Đăng xuất thành công");
  };

  return (
    <div>
      <WrapperHeader>
        <Col span={5}>
          <div onClick={() => navigate("/")}>
            <img
              width={80}
              style={{ objectFit: "cover" }}
              height={50}
              src={tiki}
              alt="#"
            />
          </div>
        </Col>
        <Col span={10} style={{ paddingTop: "5px", marginTop: "10px" }}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm Kiếm"
            placeholder="Bạn tìm gì hôm nay"
          />
        </Col>
        <Col
          span={9}
          style={{ display: "flex", gap: "54px", marginTop: "4px" }}
        >
          <WrapperHeaderAccount gutter={16}>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div style={{ cursor: "pointer" }}>
              {user?.email ? (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "2px" }}
                >
                  <Typography>{user?.email}</Typography>
                  <Button onClick={handleLogout}>Đăng xuất</Button>
                </div>
              ) : (
                <div onClick={handleNavigateLogin}>
                  <WrapperTextHeaderSmall
                    style={{ fontSize: "12px", color: "black" }}
                  >
                    Đăng Nhập/Đăng Ký
                  </WrapperTextHeaderSmall>
                  <div>
                    <span style={{ fontSize: "12px" }}>Tài Khoản</span>
                    <CaretDownOutlined />
                  </div>
                </div>
              )}
            </div>
          </WrapperHeaderAccount>
          <div className="pt-6 ml-4" onClick={() => navigate("/cart")}>
            <Badge count={cart ? cart?.length : 0} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#000000" }}
              />
            </Badge>
            {/* <WrapperTextHeaderSmall style={{ fontSize: "12px" }}>
              Giỏ hàng
            </WrapperTextHeaderSmall> */}
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
