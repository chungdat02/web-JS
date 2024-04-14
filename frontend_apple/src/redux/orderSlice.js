// orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    submitOrderStart(state) {
      state.loading = true;
      state.error = null;
    },
    submitOrderSuccess(state, action) {
      state.loading = false;
      state.orders.push(action.payload);
    },
    submitOrderFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { submitOrderStart, submitOrderSuccess, submitOrderFailure } =
  orderSlice.actions;

// Thêm hàm action submitOrder
export const submitOrder = (orderData) => async (dispatch) => {
  dispatch(submitOrderStart());
  try {
    // Gửi yêu cầu lên server
    const response = await fetch("API_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    const data = await response.json();
    dispatch(submitOrderSuccess(data));
  } catch (error) {
    dispatch(submitOrderFailure(error.message));
  }
};

export default orderSlice.reducer;
