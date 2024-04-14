import React from "react";
import { WrapperSliderStyle } from "../SliderComponent/style";
import { Image } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderComponent.css"; // Tạo một tệp CSS riêng để chứa các kiểu CSS tùy chỉnh của bạn

const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autospeed: 1000,
  };
  return (
    <div className="slider-container">
      <WrapperSliderStyle {...settings} className="image-slider">
        {arrImages.map((image) => (
          <div>
            <Image
              key={image}
              src={image}
              alt={`slider`}
              preview={false}
              className="slider-image"
              style={{ borderRadius: "10px" }}
            />
          </div>
        ))}
      </WrapperSliderStyle>
      <div className="additional-images">
        <Image
          style={{ borderRadius: "10px" }}
          src="https://cf.shopee.vn/file/vn-50009109-9e21194bb6f77f2bbe75cc4dffcf3f4a_xhdpi"
          preview={false}
          className="additional-image"
        />
      </div>
    </div>
  );
};

export default SliderComponent;
