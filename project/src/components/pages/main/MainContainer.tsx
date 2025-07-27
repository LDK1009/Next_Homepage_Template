"use client";

import CommonBasicSwiper from "@/components/common/display/swiper/CommonBasicSwiper";
import CommonEffectSwiper1 from "@/components/common/display/swiper/CommonEffectSwiper1";
import { mixinContainer } from "@/styles/mixins";
import { Stack, styled } from "@mui/material";

const MainContainer = () => {
  return (
    <Container>
      <CommonBasicSwiper images={["/img/swiper/swiper1.png", "/img/swiper/swiper2.png", "/img/swiper/swiper3.png"]} />
      <CommonEffectSwiper1 />
    </Container>
  );
};

export default MainContainer;

const Container = styled(Stack)`
  ${mixinContainer}
`;

//////////////////////////////////////// Styles ////////////////////////////////////////
