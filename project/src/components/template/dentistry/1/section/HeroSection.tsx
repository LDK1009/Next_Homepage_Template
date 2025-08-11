import CommonAnimationFade from "@/components/common/animation/CommonAnimationFade";
import CommonAnimationFloating from "@/components/common/animation/CommonAnimationFloating";
import CommonImage from "@/components/common/display/image/CommonImage";
import { useDeviceType } from "@/hooks/useDeviceType";
import { mixinFlex, mixinMuiButtonNoShadow } from "@/styles/mixins";
import { LocalPhoneOutlined } from "@mui/icons-material";
import { alpha, Button, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type PropsType = {
  title: string;
  subTitle: string;
  CTAClick: { desktop: () => void; mobile: () => void };
};

const HeroSection = ({ title, subTitle, CTAClick }: PropsType) => {
  const { isMobile } = useDeviceType();

  const images = [
    {
      src: "/img/dentistry/hero/01.png",
      alt: "01.png",
      style: {
        top: "10%",
        left: "0%",
      },
    },
    {
      src: "/img/dentistry/hero/02.png",
      alt: "02.png",
      style: {
        top: "0%",
        right: "0%",
        rotate: "-10deg",
      },
    },
    {
      src: "/img/dentistry/hero/03.png",
      alt: "03.png",
      style: {
        bottom: "5%",
        left: "0%",
        rotate: "10deg",
      },
    },
    {
      src: "/img/dentistry/hero/04.png",
      alt: "04.png",
      style: {
        bottom: "10%",
        right: "0%",
      },
    },
  ];

  return (
    <Container>
      <ContentLayer>
        {/* 타이틀 */}
        <CommonAnimationFade duration={1} delay={0.5}>
          <Title sx={{ fontSize: isMobile ? "70px" : "120px" }}>{title}</Title>
        </CommonAnimationFade>
        {/* 서브타이틀 */}
        <CommonAnimationFade duration={1} delay={1}>
          <SubTitleWrapper>
            <Logo src="/img/dentistry/logo/logo.png" alt="logo.png" width={48} height={48} />
            <SubTitle sx={{ fontSize: isMobile ? "15px" : "30px" }}>{subTitle}</SubTitle>
          </SubTitleWrapper>
        </CommonAnimationFade>
        {/* 버튼 */}
        <CommonAnimationFade duration={1} delay={2}>
          <CTAButton startIcon={<LocalPhoneOutlined />} onClick={isMobile ? CTAClick.mobile : CTAClick.desktop}>
            문의하기
          </CTAButton>
        </CommonAnimationFade>
      </ContentLayer>

      {/* 배경 레이어 */}
      {images.map((image, index) => (
        <CommonAnimationFloating key={image.alt} y={5 * (index + 1)} style={{ position: "absolute", ...image.style }}>
          <CommonImage
            aspectRatio="auto"
            src={image.src}
            alt={image.alt}
            width={isMobile ? "150px" : "300px"}
            height={isMobile ? "150px" : "300px"}
          />
        </CommonAnimationFloating>
      ))}
    </Container>
  );
};

export default HeroSection;

const Container = styled(Stack)`
  position: relative;
  width: 100%;
  height: 100vh;
  ${mixinFlex("column", "center", "center")}
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const ContentLayer = styled(Stack)`
  z-index: 3;
`;

const Title = styled(Typography)`
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
  z-index: 2;
`;

const SubTitleWrapper = styled(Stack)`
  ${mixinFlex("row", "center", "center")}
  column-gap: 8px;
`;

const Logo = styled(Image)`
  border-radius: 50%;
  z-index: 2;
`;

const CTAButton = styled(Button)`
  width: 200px;
  height: 50px;
  ${mixinMuiButtonNoShadow}
  margin-top: 40px;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: 32px;
  color: ${({ theme }) => theme.palette.secondary.main};
  background-color: transparent;
  backdrop-filter: blur(8px);
  background-color: ${({ theme }) => alpha(theme.palette.background.paper, 0.7)};
`;

const SubTitle = styled(Typography)`
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text.primary};
  z-index: 2;
`;
