import React from 'react';

import { Carousel } from 'antd';
import styled from 'styled-components';

import RightPanelCarouselItem from 'Pages/Chat/Sections/RightPanel/Components/RightPanelCarouselItem';

const CarouselWrapper = styled.div`
  .title {
    //color: #272b2e;
    font-size: 14px;
    font-weight: bold;
    line-height: 18px;
    text-align: left;
  }
`;

const RightPanelCarousel = () => {
  const carouselRef = React.useRef(null);

  const next = () => {
    // @ts-ignore
    carouselRef.current && carouselRef.current?.next();
  };

  const prev = () => {
    // @ts-ignore
    carouselRef.current && carouselRef.current?.prev();
  };

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <>
      <CarouselWrapper>
        <p className={'title'}>Packages And Equipments</p>
        <Carousel
          ref={carouselRef}
          afterChange={onChange}
          dots={false}
          dotPosition={'top'}>
          <RightPanelCarouselItem
            next={next}
            prev={prev}
            text={'23r32r9823 (Home)'}
          />
          <RightPanelCarouselItem
            next={next}
            prev={prev}
            text={'23r32r9823 (User)'}
          />
          <RightPanelCarouselItem
            next={next}
            prev={prev}
            text={'23r32r9823 (Profile)'}
          />
          <RightPanelCarouselItem
            next={next}
            prev={prev}
            text={'23r32r9823 (Tabs)'}
          />
        </Carousel>
      </CarouselWrapper>
    </>
  );
};

export default RightPanelCarousel;
