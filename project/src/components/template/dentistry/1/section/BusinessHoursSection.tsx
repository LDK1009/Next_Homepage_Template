import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import styled from "@mui/material/styles/styled";
import React from "react";
import { shouldForwardProp } from "@/utils/mui";
import { useDeviceType } from "@/hooks/useDeviceType";
import { mixinFlex } from "@/styles/mixins";
import CommonImage from "@/components/common/display/image/CommonImage";
import CommonAnimationFloating from "@/components/common/animation/CommonAnimationFloating";
import CommonAnimationSlide from "@/components/common/animation/CommonAnimationSlide";

export type BusinessHoursSectionPropsType = {
  businessHours: {
    day: string;
    time: string;
  }[];
};

const BusinessHoursSection = ({ businessHours }: BusinessHoursSectionPropsType) => {
  const { isMobile } = useDeviceType();

  return (
    <Container>
      <SectionName $isMobile={isMobile}>영업시간</SectionName>
      <BodyContainer>
        <ImageContainer>
          <CommonAnimationFloating y={10}>
            <CommonImage src="/img/dentistry/business-hours/clock.png" alt="영업시간" width="100%" height="100%" />
          </CommonAnimationFloating>
        </ImageContainer>
        <TimeContainer>
          {businessHours.map((item, index) => (
            <CommonAnimationSlide key={item.day} duration={0.5} delay={0.1 * index + 0.3} distance={10}>
              <DayTimeContainer>
                <Day $isMobile={isMobile}>{item.day}</Day>
                <Time $isMobile={isMobile}>{item.time}</Time>
              </DayTimeContainer>
            </CommonAnimationSlide>
          ))}
        </TimeContainer>
      </BodyContainer>
    </Container>
  );
};

export default BusinessHoursSection;

type CommonStyleProps = {
  $isMobile: boolean;
};

const Container = styled(Stack)`
  ${mixinFlex("column", "start", "center")}
  width: 100%;
  row-gap: 40px;
`;

const SectionName = styled(Typography, { shouldForwardProp })<CommonStyleProps>`
  font-weight: bold;
  font-size: ${({ $isMobile }) => ($isMobile ? "32px" : "64px")};
`;

const BodyContainer = styled(Stack)`
  ${mixinFlex("row", "center", "stretch")}
  width: 100%;
`;

const ImageContainer = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  flex: 1;
`;

const TimeContainer = styled(Stack)`
  ${mixinFlex("column", "space-evenly", "center")}
  row-gap: 16px;
  flex: 1;
`;

const DayTimeContainer = styled(Stack)`
  width: 100%;
`;

const Day = styled(Stack, { shouldForwardProp })<CommonStyleProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.secondaryVariable.blue.main};
  font-weight: bold;
  font-size: ${({ $isMobile }) => ($isMobile ? "16px" : "32px")};
  color: ${({ theme }) => theme.palette.common.white};
  padding: 10px 20px;
  border-radius: 10px;
`;

const Time = styled(Stack, { shouldForwardProp })<CommonStyleProps>`
  font-weight: bold;
  font-size: ${({ $isMobile }) => ($isMobile ? "16px" : "32px")};
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 10px 20px;
  border-radius: 10px;
`;
