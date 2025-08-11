import CommonImage from "@/components/common/display/image/CommonImage";
import { useDeviceType } from "@/hooks/useDeviceType";
import { mixinFlex } from "@/styles/mixins";
import { Chip, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { shouldForwardProp } from "@/utils/mui";
import CommonAnimationSlide from "@/components/common/animation/CommonAnimationSlide";

export type AboutSectionPropsType = {
  title: string;
  description: string;
  tags: {
    icon: React.ReactElement;
    text: string;
  }[];
};

const AboutSection = ({ title, description, tags }: AboutSectionPropsType) => {
  const { isMobile } = useDeviceType();

  return (
    <Container $isMobile={isMobile}>
      <ImageContainer>
        <CommonImage src={"/img/dentistry/about/hospital.png"} alt="about" width="100%" height="100%" />
      </ImageContainer>
      <TextContainer $isMobile={isMobile}>
        <CommonAnimationSlide duration={0.5} delay={0.5}>
          <Title $isMobile={isMobile}>{title}</Title>
        </CommonAnimationSlide>
        <CommonAnimationSlide duration={0.5} delay={0.75}>
          <Description $isMobile={isMobile} dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br>") }} />
        </CommonAnimationSlide>
        <TagContainer>
          {tags.map((tag, index) => (
            <CommonAnimationSlide key={index} duration={0.3} delay={index * 0.1 + 1} distance={30}>
              <Tag label={tag.text} icon={tag.icon} />
            </CommonAnimationSlide>
          ))}
        </TagContainer>
      </TextContainer>
    </Container>
  );
};

export default AboutSection;

type CommonStyleProps = {
  $isMobile: boolean;
};

const Container = styled(Stack, { shouldForwardProp })<CommonStyleProps>`
  ${mixinFlex("row", "start", "stretch")}
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
`;

const ImageContainer = styled(Stack)`
  flex: 2;
`;

const TextContainer = styled(Stack, { shouldForwardProp })<CommonStyleProps>`
  flex: 3;
  ${mixinFlex("column", "center", "center")}
  row-gap: 16px;
  padding: ${({ $isMobile }) => ($isMobile ? "16px" : "32px")};
`;

const Title = styled(Typography, { shouldForwardProp })<CommonStyleProps>`
  font-size: ${({ $isMobile }) => ($isMobile ? "24px" : "48px")};
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Description = styled(Typography, { shouldForwardProp })<CommonStyleProps>`
  font-size: ${({ $isMobile }) => ($isMobile ? "14px" : "24px")};
  color: ${({ theme }) => theme.palette.text.secondary};
  white-space: pre-line;
  text-align: ${({ $isMobile }) => ($isMobile ? "left" : "center")};
`;

const TagContainer = styled(Stack)`
  ${mixinFlex("row", "center", "center")}
  column-gap: 16px;
`;

const Tag = styled(Chip)`
  background-color: ${({ theme }) => theme.palette.secondaryVariable.blue.main};
  color: ${({ theme }) => theme.palette.common.white};

  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;
