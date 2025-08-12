import CommonImage from "@/components/common/display/image/CommonImage";
import { useDeviceType } from "@/hooks/useDeviceType";
import { mixinFlex } from "@/styles/mixins";
import { Stack, styled, Typography } from "@mui/material";
import React from "react";
import { shouldForwardProp } from "@/utils/mui";
import CommonAnimationFade from "@/components/common/animation/CommonAnimationFade";
import CommonAnimationSlide from "@/components/common/animation/CommonAnimationSlide";

export type ProfileSectionPropsType = {
  name: string;
  philosophy: string;
  jobs: string[];
};

const ProfileSection = ({ name, philosophy, jobs }: ProfileSectionPropsType) => {
  const { isMobile } = useDeviceType();

  return (
    <Container $isMobile={isMobile}>
      <SectionName
        sx={{
          fontSize: isMobile ? "32px" : "64px",
        }}
      >
        소개
      </SectionName>
      <BodyContainer $isMobile={isMobile}>
        <ImageContainer>
          <CommonImage src={"/img/dentistry/profile/profile.png"} alt="equipment" width="100%" height="100%" />
        </ImageContainer>
        <ProfileTextContainer>
          <CommonAnimationFade delay={0.5} duration={1}>
            <ProfileName $isMobile={isMobile} variant="h6">
              {name}
            </ProfileName>
          </CommonAnimationFade>
          <CommonAnimationFade delay={0.75} duration={1}>
            <ProfilePhilosophy $isMobile={isMobile} variant="body1">
              &quot;{philosophy}&quot;
            </ProfilePhilosophy>
          </CommonAnimationFade>
          {jobs.map((job, index) => (
            <CommonAnimationSlide key={index} delay={0.1 * index} duration={0.3} direction="left" distance={30}>
              <ProfileJob $isMobile={isMobile} variant="body1">
                • {job}
              </ProfileJob>
            </CommonAnimationSlide>
          ))}
        </ProfileTextContainer>
      </BodyContainer>
    </Container>
  );
};

export default ProfileSection;

type CommonStyleProps = {
  $isMobile: boolean;
};

const Container = styled(Stack, { shouldForwardProp })<CommonStyleProps>`
  ${mixinFlex("column", "center", "center")}
  row-gap: ${({ $isMobile }) => ($isMobile ? "0px" : "40px")};
  padding: 0px 24px;
`;

const SectionName = styled(Typography)`
  font-weight: bold;
`;

const BodyContainer = styled(Stack, { shouldForwardProp })<CommonStyleProps>`
  ${mixinFlex("row", "start", "stretch")}
  flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
  column-gap: ${({ $isMobile }) => ($isMobile ? "0px" : "40px")};
  row-gap: ${({ $isMobile }) => ($isMobile ? "40px" : "0px")};
`;

const ImageContainer = styled(Stack)`
  flex: 2;
`;

const ProfileTextContainer = styled(Stack)`
  ${mixinFlex("column", "start", "start")}
  flex: 3;
`;

const ProfileName = styled(Typography, { shouldForwardProp })<CommonStyleProps>`
  width: 100%;
  font-size: ${({ $isMobile }) => ($isMobile ? "24px" : "48px")};
  font-weight: bold;
  text-align: center;
`;

const ProfilePhilosophy = styled(Typography, { shouldForwardProp })<CommonStyleProps>`
  width: 100%;
  font-size: ${({ $isMobile }) => ($isMobile ? "16px" : "24px")};
  font-weight: bold;
  text-align: center;
  margin: ${({ $isMobile }) => ($isMobile ? "8px 0px" : "16px 0px")};
`;

const ProfileJob = styled(Typography, { shouldForwardProp })<CommonStyleProps>`
  width: 100%;
  font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "24px")};
  text-align: start;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
