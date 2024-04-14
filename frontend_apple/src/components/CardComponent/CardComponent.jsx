import React, { useEffect, useState } from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperImagesStyle,
  WrapperPriceText,
} from "./style";
import logo from "../../assets/images/kiemduyet.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import * as message from "../../components/Message/Message";

const CardComponent = ({ data }) => {
  const dispatch = useDispatch();

  const [listIdCart, setListIdCart] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  const handleAddToCart = () => {
    dispatch(addToCart({ info: data, amount: 1 }));
    message.success("Thêm giỏ hàng thành công");
  };

  useEffect(() => {
    const listId = cart?.map((e) => e?.info?._id);
    setListIdCart(listId);
  }, [cart]);

  const redirectToProductPage = () => {
    window.location.href = '/clock/clock.html'
    console.log(window.location.href)
  };

  return (
    <div>
      <WrapperCardStyle
        bodyStyle={{ padding: "10px" }}
        hoverable
        headStyle={{ width: "300px", height: "300px" }}
        style={{
          width: 200,
        }}
        cover={<img alt="example" src={data?.image} />}
      >
        <WrapperImagesStyle preview={false} src={logo} alt="#" />
        <StyleNameProduct>{data?.name}</StyleNameProduct>
        <WrapperPriceText
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "3px",
          }}
        >
          <span style={{ marginRight: "8px" }}>
            {data?.price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </WrapperPriceText>
        {listIdCart?.includes(data?._id) ? (
          <button
            style={{
              width: "100%",
              height: "35px",
              background: "green",
              borderRadius: "10px",
              color: "white",
              marginBottom: "5px", // Thêm khoảng cách giữa các nút
            }}
          >
            Đã có trong giỏ hàng
          </button>
        ) : (
          <button
            style={{
              width: "100%",
              height: "35px",
              background: "red",
              borderRadius: "10px",
              color: "white",
              marginBottom: "5px", // Thêm khoảng cách giữa các nút
            }}
            onClick={handleAddToCart}
          >
            Thêm giỏ hàng
          </button>
        )}
        <button
          style={{
            width: "100%",
            height: "35px",
            background: "blue",
            borderRadius: "10px",
            color: "white",
          }}
          onClick={redirectToProductPage}
        >
          Xem chi tiết
        </button>
      </WrapperCardStyle>
    </div>
  );
};

export default CardComponent;
