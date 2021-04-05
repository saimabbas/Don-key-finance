import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselStyle.scss";

export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
  <Carousel
    indicators={false}
    prevLabel="Back"
    nextLabel="Next"
    activeIndex={index}
    onSelect={handleSelect}
  >
      <Carousel.Item>{props.children1}</Carousel.Item>
      <Carousel.Item>{props.children2}</Carousel.Item>
      <Carousel.Item>{props.children3}</Carousel.Item>
      <Carousel.Item>{props.children4}</Carousel.Item>
      <Carousel.Item>{props.children5}</Carousel.Item>
    </Carousel>
  );
}
