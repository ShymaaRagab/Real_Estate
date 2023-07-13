import React from "react";
import SliderE from "react-slick";
import "./Slider.scss";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="btnSlider" onClick={onClick}>
      <button className="Next"> &#x2192;</button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="btnSlider" onClick={onClick}>
      <button className="prev">&#x2190;</button>
    </div>
  );
};
function Slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>,
    responsive: [
      {
        breackpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider">
      <SliderE {...settings}>
        <div className="box1">
          
        </div>
        <div className="box2">
          
        </div>
      </SliderE>
    </div>
  );
}

export default Slider;
