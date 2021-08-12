import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Slider>
  );
};

export default Carousel;
