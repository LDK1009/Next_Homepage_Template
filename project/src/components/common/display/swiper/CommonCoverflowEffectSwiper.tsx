import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { styled } from "@mui/material/styles";
import { breakpoint, mixinFlex } from "@/styles/mixins";
import Image from "next/image";

const CommonCoverflowEffectSwiper = () => {
  return (
    <Container
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 0.9,
      }}
      modules={[EffectCoverflow, Autoplay]}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      <SwiperItem>
        <SwiperItemImage src="/img/swiper/swiper1.png" alt="Slide 1" fill />
      </SwiperItem>
      <SwiperItem>
        <SwiperItemImage src="/img/swiper/swiper2.png" alt="Slide 2" fill />
      </SwiperItem>
      <SwiperItem>
        <SwiperItemImage src="/img/swiper/swiper3.png" alt="Slide 3" fill />
      </SwiperItem>
    </Container>
  );
};

export default CommonCoverflowEffectSwiper;

const Container = styled(Swiper)`
  width: 100%;
  height: auto;
  aspect-ratio: 7/5;
  overflow: hidden;
  cursor: grab;

  /* ~ 모바일 */
  @media (min-width: 0px) and (max-width: ${breakpoint.mobile}px) {
    border-radius: 16px;
  }
  /* ~ 데스크톱 */
  @media (min-width: ${breakpoint.desktop}px) {
    border-radius: 32px;
  }
`;

const SwiperItem = styled(SwiperSlide)`
  position: relative;
  ${mixinFlex("column", "center", "center")}
  width: 100%;
  height: 100%;
`;

const SwiperItemImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`; 