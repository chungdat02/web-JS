// CheckoutPage.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { submitOrder } from "./redux/orderSlice";
import { addToCart } from "./redux/cartSlice";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user); // Giả sử bạn có slice user để xác thực người dùng
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleCheckout = () => {
    if (user.isAuthenticated) {
      // Submit order to server
      dispatch(submitOrder(cart, user));
    } else {
      // Redirect to login page
      window.location.href = "/login";
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      {user.isAuthenticated ? (
        <div>
          <h3>Shipping Information</h3>
          <form>
            <label>
              Full Name:
              <input type="text" />
            </label>
            <label>
              Address:
              <input type="text" />
            </label>
            <label>
              City:
              <input type="text" />
            </label>
            <label>
              Postal Code:
              <input type="text" />
            </label>
            <button onClick={handleCheckout}>Checkout</button>
          </form>
        </div>
      ) : (
        <p>Please log in to proceed with checkout.</p>
      )}
    </div>
  );
};

export default CheckoutPage;
