import React from 'react';
import {useState} from 'react';
import {Carousel, CarouselItem, CarouselIndicators, CarouselControl} from 'reactstrap';

const CarouselShow = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const Items = props.slide;

  const next = () => {
   if (animating) return;
   const nextIndex = activeIndex === Items.length - 1 ? 0 : activeIndex + 1;
   setActiveIndex(nextIndex);
 }

 const previous = () => {
   if (animating) return;
   const nextIndex = activeIndex === 0 ? Items.length - 1 : activeIndex - 1;
   setActiveIndex(nextIndex);
 }

 const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slide = Items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.altText}
         >

      <img src={item.src} alt={item.altText} className="img-fluid"/>
      </CarouselItem>
    );
  });

  return (

    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      >
    <CarouselIndicators items={Items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slide}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>

  );

}

export default CarouselShow;
