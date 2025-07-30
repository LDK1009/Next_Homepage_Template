"use client";

import { mixinContainer } from "@/styles/mixins";
import { Stack, styled } from "@mui/material";
import CommonText from "@/components/common/display/text/CommonText";
import CommonAnimationFade from "@/components/common/animation/CommonAnimationFade";
import CommonAnimationSlide from "@/components/common/animation/CommonAnimationSlide";

const MainContainer = () => {
  return (
    <Container>
      <CommonAnimationFade inViewRepeat duration={1} delay={1}>
        <CommonText variant="h1" color="info" align="left">
          Hello World
        </CommonText>
      </CommonAnimationFade>
      <CommonAnimationSlide inViewRepeat direction="bottom">
        <CommonText variant="h1" color="info" align="left">
          Hello World
        </CommonText>
      </CommonAnimationSlide>
    </Container>
  );
};

export default MainContainer;

const Container = styled(Stack)`
  ${mixinContainer}
`;

//////////////////////////////////////// Styles ////////////////////////////////////////
