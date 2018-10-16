import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const styles = {
        height: 400,
        width: 400,
        align: "center"
    };
    return (
      <div>
        
        <Slider {...settings}>
            <div {...styles}>
                <img src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&h=350" alt="image1"/>
            </div>
            <div {...styles}>
                <img src="https://images.pexels.com/photos/11744/pexels-photo-11744.jpeg?auto=compress&cs=tinysrgb&h=350" alt="image2"/>
            </div>
        </Slider>
      </div>
    );
  }
}