"use client";

import { mixinContainer } from "@/styles/mixins";
import { Stack, styled } from "@mui/material";
import CommonText from "@/components/common/display/text/CommonText";
import CommonAnimationFade from "@/components/common/animation/CommonAnimationFade";
import CommonAnimationSlide from "@/components/common/animation/CommonAnimationSlide";
import CommonGoToBar from "@/components/common/navigation/CommonGoToBar";

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
      <CommonGoToBar
        menus={[
          {
            type: "kakao-talk",
            link: "https://www.google.com",
          },
          {
            type: "naver-blog",
            link: "https://www.google.com",
          },
          {
            type: "instagram",
            link: "https://www.google.com",
          },
          {
            type: "location",
            link: "https://www.google.com",
          },
          {
            type: "contact",
            link: "https://www.google.com",
          },
        ]}
      />
    </Container>
  );
};

export default MainContainer;
const Container = styled(Stack)`
  ${mixinContainer}

  height:200vh;
  background-image: url("/img/naver-blog.png");
`;

//////////////////////////////////////// Styles ////////////////////////////////////////
