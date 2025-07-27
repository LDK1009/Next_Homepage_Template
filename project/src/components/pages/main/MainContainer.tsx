"use client";

import CommonBasicSwiper from "@/components/common/display/swiper/CommonBasicSwiper";
import CommonFadeEffectSwiper from "@/components/common/display/swiper/CommonFadeEffectSwiper";
import CommonCubeEffectSwiper from "@/components/common/display/swiper/CommonCubeEffectSwiper";
import CommonFlipEffectSwiper from "@/components/common/display/swiper/CommonFlipEffectSwiper";
import CommonCardsEffectSwiper from "@/components/common/display/swiper/CommonCardsEffectSwiper";
import CommonCreativeEffectSwiper from "@/components/common/display/swiper/CommonCreativeEffectSwiper";
import CommonCoverflowEffectSwiper from "@/components/common/display/swiper/CommonCoverflowEffectSwiper";
import { mixinContainer } from "@/styles/mixins";
import { Stack, styled } from "@mui/material";

const MainContainer = () => {
  return (
    <Container>
      <CommonBasicSwiper images={["/img/swiper/swiper1.png", "/img/swiper/swiper2.png", "/img/swiper/swiper3.png"]} />
      <CommonFadeEffectSwiper />
      <CommonCubeEffectSwiper />
      <CommonFlipEffectSwiper />
      <CommonCardsEffectSwiper />
      <CommonCreativeEffectSwiper />
      <CommonCoverflowEffectSwiper />
    </Container>
  );
};

export default MainContainer;

const Container = styled(Stack)`
  ${mixinContainer}
`;

//////////////////////////////////////// Styles ////////////////////////////////////////
