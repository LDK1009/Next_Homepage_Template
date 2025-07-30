"use client";

import { mixinContainer, mixinFlex } from "@/styles/mixins";
import { Stack, styled } from "@mui/material";
import CommonImage from "@/components/common/display/image/CommonImage";

const MainContainer = () => {
  return (
    <Container>
      <ImageContainer>
        <ImageItem>
          <CommonImage type="fancyBannerSquare" src="/img/swiper/swiper1.png" alt="Slide 1" />
        </ImageItem>
        <ImageItem>
          <CommonImage type="fancyBannerSquare" src="/img/swiper/swiper1.png" alt="Slide 1" />
        </ImageItem>
      </ImageContainer>
    </Container>
  );
};

export default MainContainer;

const Container = styled(Stack)`
  ${mixinContainer}
`;

const ImageContainer = styled(Stack)`
  width: 100%;
  ${mixinFlex("row", "center", "center")}
`;

const ImageItem = styled(Stack)`
flex:1;
`;

//////////////////////////////////////// Styles ////////////////////////////////////////
