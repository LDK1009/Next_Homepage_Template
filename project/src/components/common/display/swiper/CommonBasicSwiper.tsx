import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // 페이드 효과 스타일

import { styled } from "@mui/material";
import { breakpoint, mixinFlex } from "@/styles/mixins";
import Image from "next/image";

type PropsType = {
  images: string[];
}
const CommonBasicSwiper = ({ images }: PropsType) => {
  return (
    <Container
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2000, // 자동 재생 시간 (ms)
        disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 유지
      }}
    >
      {images.map((image, index) => (
        <SwiperItem key={index}>
          <SwiperItemImage src={image} alt={`swiper-${index}`} fill />
        </SwiperItem>
      ))}
    </Container>
  );
};

export default CommonBasicSwiper;

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
