import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import { styled } from "@mui/material";
import { breakpoint, mixinFlex } from "@/styles/mixins";

// shouldForwardProp 유틸이 있다면 import
import { shouldForwardProp } from "@/utils/mui";

type PropsType = {
  children: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  rounded?: boolean;
};

const CommonFadeEffectSwiper = ({
  children,
  spaceBetween = 30,
  slidesPerView = 1,
  loop = true,
  autoplay = true,
  autoplayDelay = 2000,
  rounded = false,
}: PropsType) => {
  return (
    <Container
      modules={[EffectFade, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      effect="fade"
      loop={loop}
      autoplay={autoplay ? {
        delay: autoplayDelay,
        disableOnInteraction: false,
      } : false}
      $rounded={rounded}
    >
      {children}
    </Container>
  );
};

export default CommonFadeEffectSwiper;

type ContainerPropsType = {
  $rounded?: boolean;
};

const Container = styled(Swiper, { shouldForwardProp })<ContainerPropsType>`
  width: 100%;
  height: auto;
  aspect-ratio: 7/5;
  overflow: hidden;
  cursor: grab;

  /* ~ 모바일 */
  @media (min-width: 0px) and (max-width: ${breakpoint.mobile}px) {
    border-radius: ${({ $rounded }) => ($rounded ? "16px" : "0")};
  }
  /* ~ 데스크톱 */
  @media (min-width: ${breakpoint.desktop}px) {
    border-radius: ${({ $rounded }) => ($rounded ? "32px" : "0")};
  }
`;

export const SwiperItem = styled(SwiperSlide)`
  position: relative;
  ${mixinFlex("column", "center", "center")}
  width: 100%;
  height: 100%;
`; 