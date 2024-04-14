import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/cartSlice";
import * as message from "../../components/Message/Message";

const ButtonAmount = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 16,
  cursor: "pointer",
  padding: "8px",
  border: "1px solid #ddd",
});

const CardPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [listCart, setListCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setListCart(cart);
  }, [cart]);

  const handleDecreaseAmount = (item) => {
    const updatedAmount = item?.amount - 1;
    if (updatedAmount >= 0) {
      const updatedItem = {
        ...item,
        amount: updatedAmount,
        totalPrice: updatedAmount * item.info.price,
      };
      const updatedCart = listCart.map((e) =>
        e.info._id === item.info._id ? updatedItem : e
      );
      setListCart(updatedCart);
    }
  };

  const handleIncreaseAmount = (item) => {
    const updatedAmount = item?.amount + 1;
    const updatedItem = {
      ...item,
      amount: updatedAmount,
      totalPrice: updatedAmount * item.info.price,
    };
    const updatedCart = listCart.map((e) =>
      e.info._id === item.info._id ? updatedItem : e
    );
    setListCart(updatedCart);
  };

  const handleRemoveItem = (item) => {
    const updatedCart = listCart.filter((e) => e.info._id !== item.info._id);
    setListCart(updatedCart);
  };

  const handleSaveCartInfo = () => {
    dispatch(updateCart(listCart));
    message.success("Lưu giỏ hàng thành công");
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;

      listCart.forEach((item) => {
        totalPrice += Number(item.info?.price) * Number(item.amount);
      });

      setTotal(totalPrice);
    };
    calculateTotalPrice();
  }, [listCart]);

  return (
    <Box padding={"40px"}>
      <Container>
        <Grid container>
          <Grid item xs={3}>
            <Typography fontSize={14} fontWeight={600}>
              Sản phẩm
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography fontSize={14} fontWeight={600}>
              Giá tiền
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography fontSize={14} fontWeight={600}>
              Số lượng
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography fontSize={14} fontWeight={600}>
              Thành tiền
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography fontSize={14} fontWeight={600}>
              Hành động
            </Typography>
          </Grid>
        </Grid>
        {listCart?.map((e) => (
          <Grid container mt={2} key={e?.info?._id}>
            <Grid item xs={3}>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Box
                  component={"img"}
                  src={e?.info?.image}
                  display={"block"}
                  sx={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    borderRadius: 10,
                  }}
                />
                <Typography fontSize={14}>{e?.info?.name}</Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box display={"flex"} alignItems={"center"} height={"100%"}>
                <Typography fontSize={14}>
                  {e?.info?.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display={"flex"} alignItems={"center"} height={"100%"}>
                <ButtonAmount>
                  <button fontSize={18} onClick={() => handleDecreaseAmount(e)}>
                    <Typography fontSize={18}>-</Typography>
                  </button>
                  <Typography fontSize={14}>{e?.amount}</Typography>
                  <button fontSize={18} onClick={() => handleIncreaseAmount(e)}>
                    <Typography fontSize={18}>+</Typography>
                  </button>
                </ButtonAmount>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box display={"flex"} alignItems={"center"} height={"100%"}>
                <Typography fontSize={14}>
                  {(Number(e?.amount) * Number(e?.info?.price)).toLocaleString(
                    "it-IT",
                    {
                      style: "currency",
                      currency: "VND",
                    }
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box display={"flex"} alignItems={"center"} height={"100%"}>
                <Button
                  color="error"
                  variant="contained"
                  onClick={() => handleRemoveItem(e)}
                >
                  <Typography fontSize={14}>Xóa</Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        ))}
        <Box mt={2} display={"flex"} justifyContent={"center"}>
          <Typography fontSize={18} fontWeight={600}>
            Tổng tiền:{" "}
            {total.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </Typography>
        </Box>
      </Container>
      <Box display={"flex"} mt={2} justifyContent={"center"}>
        <Button variant="contained" onClick={handleSaveCartInfo}>
          <Typography fontSize={14}>Lưu giỏ hàng</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default CardPage;
