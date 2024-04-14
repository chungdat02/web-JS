import React from "react";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";

const ProductDetailPage = () => {
  return (
    <div
      style={{
        padding: "50px 100px",
        background: "#efefef",
        height: "700px",
      }}
    >
      <div>
        <ProductDetailsComponent />
      </div>
    </div>
  );
};

export default ProductDetailPage;
