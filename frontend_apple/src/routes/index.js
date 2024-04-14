import HomePage from "../page/HomePage/HomePage";
import CartPage from "../page/CartPage/CartPage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage.jsx";
import OderPage from "../page/OrderPage/OderPage";
import ProductPage from "../page/ProductPage/ProductPage";
import SignInPage from "../page/SignInPage/SignInPage.js";
import ProductDetailPage from "../page/ProductDetailPage/ProductDetailPage.js";
import SignUpPage from "../page/SignUpPage/SignUpPage.js";
import TypeProductPage from "../page/TypeProductPage/TypeProductPage.jsx";

const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/product",
    page: ProductPage,
    isShowHeader: true,
  },
  {
    path: "/cart",
    page: CartPage,
    isShowHeader: true,
  },
  {
    path: "/:type",
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OderPage,
    isShowHeader: true,
  },
  {
    path: "/sign-in",
    page: SignInPage,
    isShowHeader: false,
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: "/product-details",
    page: ProductDetailPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
export default routes;
