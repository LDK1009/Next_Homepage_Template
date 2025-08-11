import ReviewCardSwiper from "@/components/common/display/review/ReviewCardSwiper";
import { useDeviceType } from "@/hooks/useDeviceType";
import { mixinFlex } from "@/styles/mixins";
import { shouldForwardProp } from "@/utils/mui";
import { Stack, styled, Typography } from "@mui/material";
import React from "react";

type PropsType = {
  reviews: {
    type: "kakao" | "naver" | "etc";
    nickName: string;
    reviewText: string;
    tags: string[];
    link?: string;
  }[];
};

const ReviewSection = ({ reviews }: PropsType) => {
  const { isMobile } = useDeviceType();
  return (
    <Container $isMobile={isMobile}>
      <SectionName $isMobile={isMobile}>리뷰</SectionName>
      <ReviewCardSwiper
        reviews={reviews}
        options={{
          autoplayEnabled: true,
          autoplayDelay: 3000,
          autoplayDisableOnInteraction: true,
          slidesPerView: isMobile ? 1.75 : 3,
          spaceBetween: isMobile ? 16 : 32,
        }}
      />
    </Container>
  );
};

export default ReviewSection;

type CommonStyleProps = {
  $isMobile: boolean;
};

const Container = styled(Stack, { shouldForwardProp })<CommonStyleProps>`
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "50%")};
  ${mixinFlex("column", "center", "center")}
  row-gap: 40px;
`;

const SectionName = styled(Typography, { shouldForwardProp })<CommonStyleProps>`
  font-weight: bold;
  font-size: ${({ $isMobile }) => ($isMobile ? "32px" : "64px")};
`;
